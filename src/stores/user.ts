import { writable } from 'svelte/store';

const persistantUserStore = (k, v) => {
    const {subscribe, set} = writable(v)

    return {
        subscribe, set, persist: () => {
            const json = localStorage.getItem(k);
            if (json) {
              set(JSON.parse(json));
            }
            
            subscribe(current => {
                localStorage.setItem(k, JSON.stringify(current));
            });
        }
    }
}

export const usersStore = persistantUserStore("users", [])