// stores.js
import { writable } from 'svelte/store';

export const compareList = writable([]);     // History of all compared items
export const compareSheet = writable([]);    // Currently selected products
