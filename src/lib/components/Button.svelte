<script lang="ts">
	let buttonProps = {
		class: [$$restProps.class]
	};
</script>

<button on:click {...buttonProps}><slot /></button>

<style>
	button {
		background-color: var(--contrast-color);

		color: var(--main-color);

		cursor: pointer;

		border: none;
		border-radius: 10px;

		padding: 10px;
	}
</style>
