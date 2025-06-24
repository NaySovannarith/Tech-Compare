// src/lib/config.ts

export const API_CONFIG = {
  BASE_URL: "http://localhost:8000/api",
  ENDPOINTS: {
    LOGIN: "/login",
    REGISTER: "/register",
    USER: "/user",
  },
};

export function getApiUrl(endpoint: string): string {
  return `${API_CONFIG.BASE_URL}${endpoint}`;
}
