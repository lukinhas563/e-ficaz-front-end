<script lang="ts">
	import { goto } from '$app/navigation';

	export let data;

	const handleOptions = () => {
		console.log('oi');
	};

	const handlePage = (e: MouseEvent) => {
		const line = e.currentTarget as HTMLTableRowElement;

		const id = line.querySelector('.id')?.textContent;

		goto(`./companies/${id}`);
	};
</script>

<h1>Funcionarios</h1>

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
		{#each data.companies as company}
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
</style>
