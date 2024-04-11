<script lang="ts">
	export let type = 'text';
	export let name = 'input';
	export let id = '';
</script>

<input {type} {name} {id} />

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
