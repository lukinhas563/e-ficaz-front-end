<script lang="ts">
	import Input from './Input.svelte';
</script>

<div class="container-company-info">
	<label for="name">
		Nome empresarial
		<Input id="name" />
	</label>
	<label for="fantasyname">
		Nome fantasia
		<Input id="fantasyname" />
	</label>
	<label for="cnpj">
		CNPJ
		<Input id="cnpj" />
	</label>

	<div class="container-company-info-two">
		<label for="opendate">
			Abertura
			<Input id="opendate" />
		</label>
		<label for="email">
			E-mail
			<Input id="email" />
		</label>
	</div>
</div>

<style>
	.container-company-info-two {
		display: grid;
		grid-template-columns: 1fr 3fr;

		gap: 10px;
	}
</style>
