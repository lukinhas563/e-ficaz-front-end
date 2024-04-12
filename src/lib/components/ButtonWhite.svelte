<script lang="ts">
	let buttonProps = {
		class: [$$restProps.class]
	};
</script>

<button on:click {...buttonProps}><slot /></button>

<style>
	button {
		background: none;

		color: var(--main-color);

		cursor: pointer;

		padding: 10px;

		border: 1px solid var(--table-line);
		transition: all 100ms ease-in-out;
	}
	button:hover {
		background-color: var(--table-hover);
	}
</style>
