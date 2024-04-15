<script lang="ts">
	import TableEmployee from '$lib/components/TableEmployee.svelte';
	import TableRegister from '$lib/components/TableRegister.svelte';
	import TablePartner from '$lib/components/TablePartner.svelte';

	let selected = 'employee';
</script>

<div class="container-info">
	<div class="container-info-company">
		<h1>Empresa</h1>
		<div class="info">
			<span>
				<p class="title">Nome empresarial</p>
				<p>Lucas</p>
			</span>
			<span>
				<p class="title">Nome fantasia</p>
				<p>Lucas</p>
			</span>
			<span>
				<p class="title">Abertura</p>
				<p>Lucas</p>
			</span>
			<span>
				<p class="title">CNPJ</p>
				<p>Lucas</p>
			</span>
			<span>
				<p class="title">Regime</p>
				<p>Lucas</p>
			</span>
			<span>
				<p class="title">Status</p>
				<p>Lucas</p>
			</span>
		</div>
	</div>
	<div>
		<h2>Endereço</h2>
		<div class="info">
			<span>
				<p class="title">Rua</p>
				<p>Lucas</p>
			</span>
			<span>
				<p class="title">N°</p>
				<p>Lucas</p>
			</span>
			<span>
				<p class="title">Complemento</p>
				<p>Lucas</p>
			</span>
			<span>
				<p class="title">CEP</p>
				<p>Lucas</p>
			</span>
			<span>
				<p class="title">Bairro</p>
				<p>Lucas</p>
			</span>
			<span>
				<p class="title">Municipio</p>
				<p>Lucas</p>
			</span>
			<span>
				<p class="title">UF</p>
				<p>Lucas</p>
			</span>
			<span>
				<p class="title">E-mail</p>
				<p>Lucas</p>
			</span>
		</div>
	</div>
</div>
<div class="container-table">
	<div class="container-employee-partners">
		<div class="container-activity">
			<span>
				<p class="title">Atividade economica principal</p>
				<p>OI</p>
			</span>
			<span>
				<p class="title">Atividade economica secundaria</p>
				<ul class="activity-list">
					<li>oi</li>
					<li>oi</li>
					<li>oi</li>
					<li>oi</li>
				</ul>
			</span>
		</div>
		<div class="container-table-employees-partners">
			<div class="container-options">
				<button
					on:click={() => (selected = 'employee')}
					class:selected={selected === 'employee' ? true : false}>Funcionários</button
				>
				<button
					on:click={() => (selected = 'partner')}
					class:selected={selected === 'partner' ? true : false}>Sócios</button
				>
			</div>

			<div class="table-employee">
				{#if selected === 'employee'}
					<TableEmployee />
				{:else}
					<TablePartner />
				{/if}
			</div>
		</div>
	</div>
	<div class="container-registers">
		<h3>Registros</h3>
		<TableRegister />
	</div>
</div>

<style>
	h3 {
		padding: 12px 0;
	}
	.activity-list {
		list-style: none;
	}

	/* INFO CONTAINER */
	.container-info {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	.info {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(5rem, 10rem));
	}

	.title {
		color: var(--table-line);
	}

	/* TABLE CONTAINERS */
	.container-table {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	/* container employees and partners */
	.container-options {
		display: flex;
		flex-direction: row;

		gap: 20px;

		padding: 10px 20px;
	}

	.container-options button {
		background: none;

		border: none;

		color: var(--main-color);

		font-size: 20px;

		cursor: pointer;
	}
	.container-options button:hover {
		text-decoration: underline;
	}
	.selected {
		text-decoration: underline;
	}

	.table-employee {
		max-width: 100%;

		padding: 10px;

		overflow-x: auto;
	}
</style>
