// src/lib/data/stores.ts
import { writable } from 'svelte/store';

export type Product = {
  id: string;
  name: string;
};

export const compareSheet = writable<Product[]>([]);
export const compareHistory = writable<{ id: number; products: string[] }[]>([]);
