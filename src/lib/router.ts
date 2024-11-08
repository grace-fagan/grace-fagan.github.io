import { writable } from 'svelte/store';

export const currentPath = writable(window.location.pathname);
export const currentHash = writable(window.location.hash);

// Function to handle navigation
export function navigate(path: string, hash: string = '') {
  const url = `${path}${hash ? `#${hash}` : ''}`
    window.history.pushState({}, '', url);
    currentPath.set(path);
    currentHash.set(hash);
}

// Update path and hash when the browser's back or forward buttons are used
window.addEventListener('popstate', () => {
    currentPath.set(window.location.pathname);
    currentHash.set(window.location.hash);
});