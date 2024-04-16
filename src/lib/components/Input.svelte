<script lang="ts">
	export let type = 'text';
	export let name = 'input';
	export let id = '';

	export let value = '';
</script>

{#if type === 'text'}
	<input type="text" {name} {id} bind:value />
{:else if type === 'number'}
	<input type="number" {name} {id} bind:value />
{:else if type === 'email'}
	<input type="email" {name} {id} bind:value />
{:else}
	<input type="text" {name} {id} bind:value />
{/if}

<style>
	input {
		border: 1px solid var(--border-line);

		border-radius: 2px;

		padding: 10px;

		color: var(--main-color);

		width: 100%;

		background-color: var(--input-background);
	}

	input:focus {
		outline: none;
		border: 2px solid var(--input-focus);
	}
</style>
