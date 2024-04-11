<script lang="ts">
	import { user } from '$lib/store/user';
	import Navbar from '$lib/components/Navbar.svelte';
	import Background from '$lib/components/Background.svelte';
</script>

<Navbar {user} />

<Background />

<header>
	<h2>Sistema Contábil para a sua contabiliade</h2>
	<h3>
		Sistema Contábil que traz tecnologia, integração e crescimento para todos os tipos de
		profissionais
	</h3>

	<a href="/register">Crie uma conta grátis</a>
</header>

<style>
	/* HEADER */

	header {
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;

		height: 80vh;

		gap: 30px;
	}

	h2 {
		font-size: 64px;
		text-align: center;

		max-width: 50rem;
	}

	h3 {
		font-weight: normal;
		text-align: center;

		max-width: 30rem;
	}
</style>
