<script lang="ts">
	import Input from '$lib/components/Input.svelte';
	import Button from '$lib/components/Button.svelte';
	import Background from '$lib/components/Background.svelte';
	import { page } from '$app/stores';

	let errors = $page.form;

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
	<div class="header-container">
		<h2>Área de login</h2>
		<p>Não possui uma conta? <a href="/register">Cadastre-se agora</a></p>
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
</form>

<style>
	.background {
		position: absolute;

		width: 90%;
		height: 100vh;

		overflow: hidden;
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
	.header-container {
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;

		gap: 10px;

		width: 100%;
	}
	.header-container p {
		font-size: 12px;
	}

	.form-container {
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
