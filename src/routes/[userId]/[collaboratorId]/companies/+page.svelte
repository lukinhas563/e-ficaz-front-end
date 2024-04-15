<script lang="ts">
	import Menu from '$lib/components/Menu.svelte';
	import Input from '$lib/components/Input.svelte';
	import FormCompany from '$lib/components/FormCompany.svelte';
	import ButtonWhite from '$lib/components/ButtonWhite.svelte';
	import { goto } from '$app/navigation';

	import ChartTaxData from '$lib/components/ChartTaxData.svelte';
	import ChartStatusData from '$lib/components/ChartStatusData.svelte';

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
			id: 1,
			name: 'Carlos Manoel Nobrega',
			fantasyName: 'Lavagem e Armazem Ltda',
			cnpj: '11.111.111/0001-11',
			regime: 'Simples nacional',
			status: 'Ativo'
		},
		{
			id: 1,
			name: 'Carlos Manoel Nobrega',
			fantasyName: 'Lavagem e Armazem Ltda',
			cnpj: '11.111.111/0001-11',
			regime: 'Simples nacional',
			status: 'Ativo'
		},
		{
			id: 1,
			name: 'Carlos Manoel Nobrega',
			fantasyName: 'Lavagem e Armazem Ltda',
			cnpj: '11.111.111/0001-11',
			regime: 'Simples nacional',
			status: 'Ativo'
		}
	];

	let isOpen = false;

	const handleOptions = () => {
		console.log('oi');
	};

	const handlePage = (e: MouseEvent) => {
		const line = e.currentTarget as HTMLTableRowElement;

		const id = line.querySelector('.id')?.textContent;

		goto(`./companies/${id}`);
	};
</script>

<Menu {isOpen}>
	<div class="container-button-form">
		<ButtonWhite on:click={() => (isOpen = !isOpen)}>Voltar</ButtonWhite>
	</div>

	<FormCompany />
</Menu>

<h1>Empresas</h1>

<div class="chart">
	<ChartTaxData />
	<ChartStatusData />
	<ChartTaxData />
</div>

<div class="container-filter">
	<p>OI</p>
	<div class="container-search">
		<Input />
		<ButtonWhite on:click={() => (isOpen = !isOpen)}>+</ButtonWhite>
	</div>
</div>
<table class="main-table">
	<thead class="table-header">
		<tr>
			<th scope="col"></th>
			<th scope="col"></th>
			<th scope="col">Nome empresarial</th>
			<th scope="col">Nome fantasia</th>
			<th scope="col">CNPJ</th>
			<th scope="col">Regime</th>
			<th scope="col">Status</th>
			<th scope="col"></th>
		</tr>
	</thead>
	<tbody class="table-body">
		{#each companies as company}
			<tr on:click={(e) => handlePage(e)}>
				<td>OI</td>
				<td class="id">{company.id}</td>
				<td>{company.name}</td>
				<td>{company.fantasyName}</td>
				<td>{company.cnpj}</td>
				<td>{company.regime}</td>
				<td>{company.status}</td>
				<td class="fixed" on:click|stopPropagation={() => handleOptions()}>...</td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
	/* FILTER */
	.container-filter {
		display: flex;
		align-items: center;
		justify-content: space-between;

		margin: 40px 0;
	}
	.container-search {
		display: flex;

		gap: 20px;
	}

	/* TABLE */
	.main-table {
		width: 100%;

		min-width: 1000px;

		border-collapse: collapse;
	}

	/* header */
	.table-header {
		height: 50px;
	}
	.table-header th {
		font-weight: normal;

		color: var(--table-line);

		border-bottom: 1px solid var(--table-line);
	}

	/* body */
	.table-body tr:hover {
		background-color: var(--table-hover);
	}
	.table-body td {
		height: 50px;

		text-align: center;

		font-size: 14px;

		cursor: pointer;

		border-bottom: 1px solid var(--table-line);
	}
	.fixed {
		position: sticky;

		z-index: 2;

		right: 0;

		width: 50px;

		background-color: var(--card-background);
	}
	.id {
		width: 50px;
	}

	/* FORM */
	.container-button-form {
		margin: 20px 30px;
	}

	.chart {
		display: flex;
		flex-direction: row;
		justify-content: space-between;

		margin: 30px;

		height: 150px;
	}
</style>
