<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	export let data;
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
		<button class="button-add-collaborator">+</button>
		<p class="title-add-collaborator">Adicionar novo colaborador</p>
	</div>
</main>

<style>
	main {
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
	}

	.title-add-collaborator {
		font-size: 14px;

		text-align: center;
	}
</style>
