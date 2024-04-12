<script lang="ts">
	import Input from './Input.svelte';
</script>

<form class="main-form" method="post">
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

	<div class="container-company-activity">
		<label for="activity">
			Atividade econômica principal
			<Input id="activity" />
		</label>
		<div class="container-company-activity-two">
			<label for="code">
				Código
				<Input id="code" />
			</label>
			<label for="secondactivity">
				Atividade
				<Input id="secondactivity" />
			</label>
		</div>
	</div>

	<div class="container-address">
		<div class="container-address-two">
			<label for="cep">
				CEP
				<Input id="cep" />
			</label>
			<label for="street">
				Rua
				<Input id="street" />
			</label>
		</div>

		<div class="container-address-three">
			<label for="number">
				N°
				<Input id="number" />
			</label>
			<label for="neighborhood">
				Bairro
				<Input id="neighborhood" />
			</label>
			<label for="complement">
				Complemento
				<Input id="complement" />
			</label>
		</div>

		<div class="container-address-four">
			<label for="city">
				Municipio
				<Input id="city" />
			</label>
			<label for="state">
				Estado
				<Input id="state" />
			</label>
		</div>
	</div>
</form>

<style>
	.main-form {
		display: flex;
		flex-direction: column;

		margin: 30px;

		gap: 20px;
	}

	/* container-company-info */
	.container-company-info-two {
		display: grid;
		grid-template-columns: 1fr 3fr;

		gap: 10px;
	}

	/* container-company-activity */
	.container-company-activity-two {
		display: grid;
		grid-template-columns: 1fr 3fr;

		gap: 10px;
	}

	/* container-address */

	.container-address {
		border: 1px solid var(--table-line);

		padding: 20px;
	}
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
