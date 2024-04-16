import { writable } from 'svelte/store';

export interface InterfaceCompany {
	name: string;
	fantasyName: string;
	cnpj: string;
	email: string;
	openDate: string;
}

export interface InterfaceSecondaryActivity {
	code: string;
	activity: string;
}

export interface InterfaceActivity {
	mainActivity: string;
	secondaryActivity: InterfaceSecondaryActivity[];
}

export const company = writable<InterfaceCompany>({
	name: '',
	fantasyName: '',
	cnpj: '',
	email: '',
	openDate: ''
});

export const activity = writable<InterfaceActivity>({
	mainActivity: '',
	secondaryActivity: []
});
