/** @type {import('./$types').PageLoad} */
export async function load() {
	const company = {
		name: 'Carlos',
		lastname: 'Manoel dos Santos',
		cpf: '111.111.111-11'
	};

	return {
		company: company
	};
}
