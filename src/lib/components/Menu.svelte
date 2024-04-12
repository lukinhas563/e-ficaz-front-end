<script lang="ts">
	export let isOpen = false;
</script>

<aside class="menu" class:open={isOpen}>
	<slot />
</aside>
<div class="black-screen" class:openBlack={isOpen}></div>

<style>
	.menu {
		position: absolute;

		top: 0;
		right: 0;

		height: 100%;
		width: 50%;

		overflow: hidden;

		max-width: 0;

		z-index: 4;

		background-color: var(--background-color);

		transition: max-width 100ms ease-in-out;
	}

	.black-screen {
		position: absolute;

		top: 0;
		left: 0;

		height: 100%;
		width: 100%;

		max-width: 0;
		max-height: 0;
		opacity: 0;

		z-index: 3;

		background-color: rgba(0, 0, 0, 0.5);
		transition: opacity 100ms ease-in-out;
	}

	.open {
		max-width: 30rem;
	}
	.openBlack {
		max-width: 100%;
		max-height: 100%;
		opacity: 1;
	}
</style>
