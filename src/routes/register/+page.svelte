<script lang="ts">
	import { page } from '$app/stores';
	import Input from '$lib/components/Input.svelte';
	import Button from '$lib/components/Button.svelte';
	import Background from '$lib/components/Background.svelte';

	let errors = $page.form;

	let username = '';

	const handleErros = (message: string) => {
		if (errors === null) return false;

		let found = false;

		if (Array.isArray(errors.status)) {
			errors.status.forEach((msgErro: string) => {
				if (msgErro === message) {
					found = true;
				}
			});
		}

		return found;
	};
</script>

<div class="background">
	<Background />
</div>

<form class="main-container" method="post">
	<div>
		<h2>Cadastro de usuário</h2>
		<p>Já possui uma conta? <a href="/login">Entre agora</a></p>
	</div>

	<div class="form-container">
		<label for="username">
			Nome de usuário {#if handleErros('username is a required field')}
				<b class="error-message">*Este campo é obrigatório</b>
			{:else if handleErros('username must be at least 3 characters')}
				<b class="error-message">*Este campo precisa ter mais de 3 caracteres</b>
			{/if}</label
		>
		<Input id="username" name="username" />

		<div class="name-container">
			<div>
				<label for="name">
					Nome {#if handleErros('name is a required field')}
						<b class="error-message">*Este campo é obrigatório</b>
					{:else if handleErros('name must be at least 3 characters')}
						<b class="error-message">*Este campo precisa ter mais de 3 caracteres</b>
					{/if}</label
				>
				<Input id="name" name="name" />
			</div>

			<div>
				<label for="lastname">
					Sobrenome {#if handleErros('lastname is a required field')}
						<b class="error-message">*Este campo é obrigatório</b>
					{:else if handleErros('lastname must be at least 3 characters')}
						<b class="error-message">*Este campo precisa ter mais de 3 caracteres</b>
					{/if}</label
				>
				<Input id="lastname" name="lastname" />
			</div>
		</div>

		<label for="email">
			E-mail {#if handleErros('email is a required field')}
				<b class="error-message">*Este campo é obrigatório</b>
			{/if}</label
		>
		<Input id="email" type="email" name="email" />

		<label for="password">
			Senha {#if handleErros('password is a required field')}
				<b class="error-message">*Este campo é obrigatório</b>
			{:else if handleErros('password must be at least 6 characters')}
				<b class="error-message">*Este campo precisa ter mais de 6 caracteres</b>
			{/if}</label
		>
		<Input id="password" type="password" name="password" />
	</div>

	<div class="button-container">
		<Button>Enviar</Button>
		<a href="/">Cancelar</a>
	</div>

	<p>
		Ao se cadastrar, você está concordando com os nossos termos de uso e com a nossa politica de
		segurança.
	</p>
</form>

<style>
	.background {
		position: absolute;

		width: 90%;
		height: 100vh;

		overflow: hidden;
	}

	p {
		text-align: center;
		font-size: 12px;
	}

	.error-message {
		font-size: 10px;
		font-weight: normal;

		margin-left: 10px;

		color: #f35c5c;
	}

	/* FORM */
	.main-container {
		position: absolute;

		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;

		right: 0;

		gap: 50px;

		padding: 50px;

		height: 100vh;
		width: 40%;

		background-color: var(--background-color);
	}

	/* FORM CONTENT */
	.form-container {
		display: flex;
		flex-direction: column;

		gap: 10px;

		width: 100%;
	}

	.name-container {
		display: grid;
		grid-template-columns: 1fr 2fr;

		gap: 10px;
	}

	.name-container div {
		display: flex;
		flex-direction: column;

		gap: 10px;

		width: 100%;
	}

	/* BUTTON */
	.button-container {
		display: flex;
		flex-direction: column;

		width: 100%;

		gap: 10px;
	}

	.button-container a {
		text-align: center;
	}
</style>
