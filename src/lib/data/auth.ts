import { writable } from "svelte/store";
import { getApiUrl, API_CONFIG } from "../config";

export type User = {
  id: number;
  name: string;
  email: string;
  phone?: string;
  birthday?: string;
  address?: string;
  avatar?: string;
  profilePicture?: string;
};

const isBrowser = typeof localStorage !== "undefined";

function createUserStore() {
  const initialUser: User | null = isBrowser ? JSON.parse(localStorage.getItem("user") || "null") : null;

  const { subscribe, set, update } = writable<User | null>(initialUser);

  // Keep synced with localStorage
  const setUser = (userData: User | null) => {
    if (isBrowser) {
      if (userData === null) {
        localStorage.removeItem("user");
      } else {
        localStorage.setItem("user", JSON.stringify(userData));
      }
    }
    set(userData);
  };

  return {
    subscribe,

    set: setUser,

    update: (fields: Partial<User>) => {
      update((current) => {
        if (!current) return current;
        const updated = { ...current, ...fields };
        if (isBrowser) {
          localStorage.setItem("user", JSON.stringify(updated));
        }
        return updated;
      });
    },

    login: async (email: string, password: string) => {
    try {
      const response = await fetch(getApiUrl(API_CONFIG.ENDPOINTS.LOGIN), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      // Try parsing JSON, but handle invalid JSON responses gracefully
      let data;
      try {
        data = await response.json();
      } catch {
        throw new Error("Invalid server response");
      }

      if (!response.ok) {
        throw new Error(data.message || "Login failed due to server error");
      }

      if (!data.token) {
        throw new Error("No authentication token returned");
      }

      if (typeof localStorage !== "undefined") {
        localStorage.setItem("token", data.token);
      }

      const userResponse = await fetch(getApiUrl(API_CONFIG.ENDPOINTS.USER), {
        headers: { Authorization: `Bearer ${data.token}` },
      });

      if (!userResponse.ok) {
        throw new Error("Failed to fetch user profile after login");
      }

      const userData = await userResponse.json();

      if (typeof localStorage !== "undefined") {
        localStorage.setItem("user", JSON.stringify(userData));
      }
      set(userData);

      return { success: true, user: userData };
    } catch (error) {
      console.error("Login error:", error);
      return {
        success: false,
        error: error instanceof Error ? error.message : "Unknown login error",
      };
    }
  },

    register: async (userData: { name: string; email: string; password: string; password_confirmation: string }) => {
      try {
        const response = await fetch(getApiUrl(API_CONFIG.ENDPOINTS.REGISTER), {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Registration failed");
        }

        if (isBrowser && data.token) {
          localStorage.setItem("token", data.token);
        }

        return { success: true, token: data.token };
      } catch (error) {
        console.error("Registration error:", error);
        return {
          success: false,
          error: error instanceof Error ? error.message : "Registration failed",
        };
      }
    },

    logout: () => {
      if (isBrowser) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      }
      set(null);
    },

    isAuthenticated: (): boolean => {
      if (!isBrowser) return false;
      return !!(localStorage.getItem("token") && localStorage.getItem("user"));
    },

    getToken: (): string | null => {
      if (!isBrowser) return null;
      return localStorage.getItem("token");
    },
  };
}

export const user = createUserStore();
