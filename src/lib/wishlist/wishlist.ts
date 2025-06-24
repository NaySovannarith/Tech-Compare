import { writable } from 'svelte/store';

type WishlistItem = {
	id: string;
	title: string;
	brand: string;
	image: string;
	storage: string;
	memory: string;
	price: number;
	thumbnail?: string;
	description?: string;
};

export const wishlist = writable<WishlistItem[]>([]);

export function addToWishlist(product: WishlistItem) {
	wishlist.update((items) => {
		// Prevent duplicates by id
		if (items.find((item) => item.id === product.id)) {
			return items;
		}
		return [...items, product];
	});
}

// ✅ Add type annotation for productId
export function removeFromWishlist(productId: string) {
	wishlist.update(items => items.filter(item => item.id !== productId));
}
