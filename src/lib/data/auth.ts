// src/lib/data/auth.ts
import { writable } from 'svelte/store';

// Define the User type
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

// Create a store for authentication state
function createUserStore() {
  // Initialize from localStorage if available
  const initialUser = getInitialUserState();
  const { subscribe, set, update } = writable<User | null>(initialUser);

  return {
    subscribe,
    login: (email: string, password: string) => {
      // In a real app, you would validate credentials with your backend
      // This is a mock implementation
      const userData: User = {
        id: '123',
        email: email,
        name: email.split('@')[0], // Use part of email as name
        avatar: `https://ui-avatars.com/api/?name=${email.split('@')[0]}&background=0D8ABC&color=fff`
      };
      
      // Save to store
      set(userData);
      
      // Save to localStorage for persistence
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
        
        // Save to localStorage
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem('user', JSON.stringify(updatedUser));
        }
        
        return updatedUser;
      });
    }
  };
}

// Initialize from localStorage if available
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