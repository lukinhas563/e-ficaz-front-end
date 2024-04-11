<script lang="ts">
	import Input from '$lib/components/Input.svelte';
	import Button from '$lib/components/Button.svelte';
	import Background from '$lib/components/Background.svelte';
</script>

<div class="background">
	<Background />
</div>

<form class="main-container">
	<div class="header-container">
		<h2>Cadastro de usuário</h2>
		<p>Não possui uma conta? <a href="/register">Cadastre-se agora</a></p>
	</div>

	<div class="form-container">
		<label for="username"> Nome de usuário </label>
		<Input id="username" />

		<label for="password"> Senha </label>
		<Input id="password" type="password" />
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
