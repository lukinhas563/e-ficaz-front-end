<script lang="ts">
	import Input from '$lib/components/Input.svelte';
	import Button from '$lib/components/Button.svelte';
	import Background from '$lib/components/Background.svelte';
</script>

<div class="background">
	<Background />
</div>

<form class="main-container">
	<div>
		<h2>Cadastro de usuário</h2>
		<p>Já possui uma conta? <a href="/login">Entre agora</a></p>
	</div>

	<div class="form-container">
		<label for="username"> Nome de usuário </label>
		<Input id="username" />

		<div class="name-container">
			<div>
				<label for="name"> Nome </label>
				<Input id="name" />
			</div>

			<div>
				<label for="lastname"> Sobrenome </label>
				<Input id="lastname" />
			</div>
		</div>

		<label for="email"> E-mail </label>
		<Input id="email" type="email" />

		<label for="password"> Senha </label>
		<Input id="password" type="password" />
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
