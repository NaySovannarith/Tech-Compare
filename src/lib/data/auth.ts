import { writable } from 'svelte/store';

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

// Safe check for browser
const isBrowser = typeof localStorage !== 'undefined';

function createUserStore() {
  const initialUser: User | null = isBrowser
    ? JSON.parse(localStorage.getItem('user') || 'null')
    : null;

  const { subscribe, set, update } = writable<User | null>(initialUser);

  return {
    subscribe,

    set: (userData: User | null) => {
      if (isBrowser) {
        if (userData === null) {
          localStorage.removeItem('user');
        } else {
          localStorage.setItem('user', JSON.stringify(userData));
        }
      }
      set(userData);
    },

    update: (fields: Partial<User>) => {
      update((current) => {
        if (!current) return current;
        const updated = { ...current, ...fields };
        if (isBrowser) {
          localStorage.setItem('user', JSON.stringify(updated));
        }
        return updated;
      });
    },

    logout: () => {
      if (isBrowser) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      }
      set(null);
    }
  };
}

export const user = createUserStore();
