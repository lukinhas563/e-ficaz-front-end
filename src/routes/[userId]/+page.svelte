<script lang="ts">
	import ButtonWhite from '$lib/components/ButtonWhite.svelte';
	import Button from '$lib/components/Button.svelte';
	import Input from '$lib/components/Input.svelte';
	import Menu from '$lib/components/Menu.svelte';
	import Card from '$lib/components/Card.svelte';
	export let data;

	let isOpen = false;
</script>

<main>
	{#each data.collaborators as collaborator}
		<Card
			userId={data.user.id}
			id={collaborator.id}
			first_name={collaborator.first_name}
			last_name={collaborator.last_name}
		/>
	{/each}
	<div class="add-collaborator">
		<button class="button-add-collaborator" on:click={() => (isOpen = !isOpen)}>+</button>
		<p class="title-add-collaborator">Adicionar novo colaborador</p>
	</div>
	<Menu {isOpen}>
		<div class="menu-container">
			<div class="form-header-container">
				<ButtonWhite on:click={() => (isOpen = !isOpen)}>Voltar</ButtonWhite>
				<p>Cadastro de novos colaboradores</p>
			</div>
			<form>
				<div class="form-name-container">
					<label for="name">Nome<Input id="name" /></label>
					<label for="lastname">Sobrenome<Input id="lastname" /></label>
				</div>
				<label for="email">E-mail<Input id="email" type="email" /></label>
				<div class="form-button-container">
					<Button>Enviar</Button>
					<button on:click={() => (isOpen = !isOpen)}>Cancelar</button>
				</div>
			</form>
		</div>
	</Menu>
</main>

<style>
	main {
		position: relative;

		display: flex;
		justify-content: center;
		align-items: center;

		gap: 20px;

		width: 100%;
		height: 100vh;
	}

	.add-collaborator {
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;

		gap: 20px;

		height: 10rem;
		width: 10rem;
	}

	.button-add-collaborator {
		border: none;
		border-radius: 50%;

		height: 50px;
		width: 50px;

		color: var(--background-color);

		cursor: pointer;

		background-color: var(--contrast-color);

		transition: all 100ms ease-in-out;
	}
	.button-add-collaborator:hover {
		height: 60px;
		width: 60px;
	}

	.title-add-collaborator {
		font-size: 14px;

		text-align: center;
	}

	/* MENU */
	.menu-container {
		height: 100%;

		margin: 50px;
	}

	.form-header-container {
		display: flex;
		align-items: center;
		flex-direction: row;
		justify-content: center;
	}
	.form-header-container p {
		width: 100%;

		text-align: center;
	}

	form {
		display: flex;
		flex-direction: column;
		justify-content: center;

		height: 80%;

		gap: 10px;
	}
	.form-name-container {
		display: grid;
		grid-template-columns: 1fr 2fr;

		gap: 10px;
	}
	.form-button-container {
		display: flex;
		flex-direction: column;

		margin-top: 20px;

		gap: 10px;
	}
	.form-button-container button {
		background: none;

		border: none;

		text-decoration: underline;

		cursor: pointer;

		color: var(--main-color);
	}
</style>
