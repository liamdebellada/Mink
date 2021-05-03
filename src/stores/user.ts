import { writable } from 'svelte/store';

function activeUser() {
	const { subscribe, set, update } = writable(null);

	return {
		subscribe,
        set,
        update
	};
}

export const userStore = activeUser();