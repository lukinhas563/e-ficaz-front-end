<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from './Button.svelte';

	export let user;
</script>

<nav>
	<h1><a href="/">LOGO</a></h1>

	<div>
		<a href="/login">ENTRAR</a>
		<Button on:click={() => goto('/register')}>Cadastrar</Button>
	</div>
</nav>

<style>
	nav {
		display: flex;
		justify-content: space-between;

		padding: 20px;
	}

	a {
		text-decoration: none;

		color: var(--main-color);
	}

	div {
		display: flex;
		align-items: center;
		justify-content: center;

		gap: 30px;
	}
</style>
