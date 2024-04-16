<script lang="ts">
	import Input from './Input.svelte';
</script>

<div class="container-address">
	<div class="container-address-two">
		<label for="cep">
			CEP
			<Input id="cep" name="cep" />
		</label>
		<label for="street">
			Rua
			<Input id="street" name="street" />
		</label>
	</div>

	<div class="container-address-three">
		<label for="number">
			N°
			<Input id="number" name="number" />
		</label>
		<label for="neighborhood">
			Bairro
			<Input id="neighborhood" name="neighborhood" />
		</label>
		<label for="complement">
			Complemento
			<Input id="complement" name="complement" />
		</label>
	</div>

	<div class="container-address-four">
		<label for="city">
			Municipio
			<Input id="city" name="city" />
		</label>
		<label for="state">
			Estado
			<Input id="state" name="state" />
		</label>
	</div>
</div>

<style>
	/*
	.container-address {
		border: 1px solid var(--table-line);

		padding: 20px;
	}
    */
	.container-address-two {
		display: grid;
		grid-template-columns: 1fr 2fr;

		gap: 10px;
	}

	.container-address-three {
		display: grid;
		grid-template-columns: 1fr 3fr 1fr;

		gap: 10px;
	}

	.container-address-four {
		display: grid;
		grid-template-columns: 3fr 1fr;

		gap: 10px;
	}
</style>
