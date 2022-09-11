import { writable, type Writable } from 'svelte/store';

export interface detailProps {
	title: string;
	content: string;
}

export const detailState: Writable<detailProps> = writable({
	title: '',
	content: ''
});
