import { writable } from 'svelte/store';

export interface InterfaceUser {
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
