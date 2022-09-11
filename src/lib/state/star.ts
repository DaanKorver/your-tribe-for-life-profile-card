import { writable, type Writable } from 'svelte/store';

interface StarProps {
	active: string;
	hovering: boolean;
}

export const starState: Writable<StarProps> = writable({
	active: '',
	hovering: false
});
