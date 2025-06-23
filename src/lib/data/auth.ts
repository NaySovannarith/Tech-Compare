import { writable } from 'svelte/store';

// User type as you have it
export type User = {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  phone?: string;
  birthday?: string;
  address?: string;
  profilePicture?: string;
};

function createUserStore() {
  const initialUser = getInitialUserState();
  const { subscribe, set, update } = writable<User | null>(initialUser);

  return {
    subscribe,
    set,  // <-- Add this line to expose set externally
    login: (email: string, password: string) => {
      // Mock login
      const userData: User = {
        id: '123',
        email: email,
        name: email.split('@')[0],
        avatar: `https://ui-avatars.com/api/?name=${email.split('@')[0]}&background=0D8ABC&color=fff`
      };
      set(userData);
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('user', JSON.stringify(userData));
      }
      return userData;
    },
    logout: () => {
      set(null);
      if (typeof localStorage !== 'undefined') {
        localStorage.removeItem('user');
      }
    },
    update: (userData: Partial<User>) => {
      update(currentUser => {
        if (!currentUser) return null;
        const updatedUser = { ...currentUser, ...userData };
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem('user', JSON.stringify(updatedUser));
        }
        return updatedUser;
      });
    }
  };
}

function getInitialUserState(): User | null {
  if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        return JSON.parse(savedUser);
      } catch (e) {
        console.error('Failed to parse saved user data', e);
        return null;
      }
    }
  }
  return null;
}

export const user = createUserStore();
