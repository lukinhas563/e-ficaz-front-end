<script lang="ts">
	const employees = [
		{ id: 1, name: 'Carlos', lastname: 'Emanoel dos Santos', cpf: '111.111.111-11' },
		{ id: 1, name: 'Carlos', lastname: 'Emanoel dos Santos', cpf: '111.111.111-11' },
		{ id: 1, name: 'Carlos', lastname: 'Emanoel dos Santos', cpf: '111.111.111-11' },
		{ id: 1, name: 'Carlos', lastname: 'Emanoel dos Santos', cpf: '111.111.111-11' }
	];
</script>

<table class="main-table">
	<thead class="table-header">
		<tr>
			<th scope="col">ID</th>
			<th scope="col">Nome</th>
			<th scope="col">Sobrenome</th>
			<th scope="col">CPF</th>
		</tr>
	</thead>
	<tbody class="table-body">
		{#each employees as employee}
			<tr>
				<td class="id">{employee.id}</td>
				<td>{employee.name}</td>
				<td>{employee.lastname}</td>
				<td>{employee.cpf}</td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
	.main-table {
		width: 100%;

		min-width: 400px;

		border-collapse: collapse;
	}

	/* HEADER */
	.table-header {
		height: 50px;
	}
	.table-header tr {
		border-bottom: 1px solid var(--table-line);
	}
	.table-header tr th {
		font-weight: normal;

		color: var(--table-line);
	}

	/* BODY */
	.table-body {
		text-align: center;
	}

	.table-body tr {
		height: 40px;

		cursor: pointer;

		border-bottom: 1px solid var(--table-line);
	}
	.table-body tr:hover {
		background-color: var(--table-hover);
	}
</style>
