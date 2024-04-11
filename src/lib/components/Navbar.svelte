<script lang="ts">
	import Button from './Button.svelte';
	import { goto } from '$app/navigation';
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

		padding: 10px;
	}

	div {
		display: flex;
		align-items: center;
		justify-content: center;

		gap: 30px;
	}
</style>
