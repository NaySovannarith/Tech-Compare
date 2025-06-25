// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
export const goto = (url) => {
  // This is a placeholder for the actual navigation logic.
  // In a real SvelteKit app, this would use the router to navigate to the given URL.
  window.location.href = url
}