/** @type {import('./$types').PageLoad} */
export async function load() {
	const companies = [
		{
			id: 1,
			name: 'Carlos Manoel Nobrega',
			fantasyName: 'Lavagem e Armazem Ltda',
			cnpj: '11.111.111/0001-11',
			regime: 'Simples nacional',
			status: 'Ativo'
		},
		{
			id: 2,
			name: 'Carlos Manoel Nobrega',
			fantasyName: 'Lavagem e Armazem Ltda',
			cnpj: '11.111.111/0001-11',
			regime: 'Simples nacional',
			status: 'Ativo'
		},
		{
			id: 3,
			name: 'Carlos Manoel Nobrega',
			fantasyName: 'Lavagem e Armazem Ltda',
			cnpj: '11.111.111/0001-11',
			regime: 'Simples nacional',
			status: 'Ativo'
		},
		{
			id: 4,
			name: 'Carlos Manoel Nobrega',
			fantasyName: 'Lavagem e Armazem Ltda',
			cnpj: '11.111.111/0001-11',
			regime: 'Simples nacional',
			status: 'Ativo'
		}
	];

	return {
		companies: companies
	};
}
