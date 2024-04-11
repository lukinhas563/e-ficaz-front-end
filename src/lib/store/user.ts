import { writable } from 'svelte/store';

interface InterfaceUser {
	id: number;
	name: string;
	lastname: string;
	email: string;
	token: string;
}

export const user = writable<InterfaceUser>({
	id: 0,
	name: '',
	lastname: '',
	email: '',
	token: ''
});
