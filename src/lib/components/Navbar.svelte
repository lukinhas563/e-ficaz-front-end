<script lang="ts">
	import type { InterfaceUser } from '$lib/store/user';
	import { goto } from '$app/navigation';
	import Button from './Button.svelte';

	export let data: InterfaceUser;
</script>

<nav>
	<h1><a href="/">LOGO</a></h1>

	<div>
		{#if data}
			<a href={`/${data.id}`}>Perfil</a>
		{:else}
			<a href="/login">Entrar</a>
			<Button on:click={() => goto('/register')}>Cadastrar</Button>
		{/if}
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
