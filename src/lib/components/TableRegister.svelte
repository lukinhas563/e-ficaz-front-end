<script lang="ts">
	const registers = [
		{ id: 1, type: 'Fechamento fiscal', date: '05/01/2023', valor: 5123.55 },
		{ id: 1, type: 'Fechamento fiscal', date: '05/01/2023', valor: 5123.55 },
		{ id: 1, type: 'Fechamento fiscal', date: '05/01/2023', valor: 5123.55 },
		{ id: 1, type: 'Fechamento fiscal', date: '05/01/2023', valor: 5123.55 },
		{ id: 1, type: 'Fechamento fiscal', date: '05/01/2023', valor: 5123.55 },
		{ id: 1, type: 'Fechamento fiscal', date: '05/01/2023', valor: 5123.55 },
		{ id: 1, type: 'Fechamento fiscal', date: '05/01/2023', valor: 5123.55 },
		{ id: 1, type: 'Fechamento fiscal', date: '05/01/2023', valor: 5123.55 },
		{ id: 1, type: 'Fechamento fiscal', date: '05/01/2023', valor: 5123.55 }
	];
</script>

<table class="main-table">
	<thead class="table-header">
		<tr>
			<th scope="col">ID</th>
			<th scope="col">Fechamento</th>
			<th scope="col">Data</th>
			<th scope="col">Valor</th>
		</tr>
	</thead>
	<tbody class="table-body">
		{#each registers as register}
			<tr>
				<td class="id">{register.id}</td>
				<td>{register.type}</td>
				<td>{register.date}</td>
				<td>R$ {register.valor}</td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
	.main-table {
		width: 100%;

		border-collapse: collapse;
	}

	/* HEADER */
	.table-header tr {
		border-bottom: 1px solid var(--table-line);
	}
	.table-header tr th {
		height: 50px;

		color: var(--table-line);

		font-weight: normal;
	}

	/* HEADER */
	.table-body tr {
		height: 40px;

		border-bottom: 1px solid var(--table-line);

		cursor: pointer;

		text-align: center;
	}
	.table-body tr:hover {
		background-color: var(--table-hover);
	}
</style>
