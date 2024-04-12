<slot />

<style>
	:root {
		--background-color: #181b20;
		--main-color: #ffffff;
		--contrast-color: #3aa8bd;

		--border-line: rgba(217, 217, 217, 0.2);

		--input-background: #1a1d25;
		--input-focus: #724abc;

		--card-background: #0b0c0f;
	}

	:global(*) {
		margin: 0;
		padding: 0;

		font-family:
			system-ui,
			-apple-system,
			BlinkMacSystemFont,
			'Segoe UI',
			Roboto,
			Oxygen,
			Ubuntu,
			Cantarell,
			'Open Sans',
			'Helvetica Neue',
			sans-serif;

		box-sizing: border-box;
	}

	:global(body) {
		background-color: var(--background-color);
		color: var(--main-color);
	}

	:global(a) {
		color: var(--contrast-color);
	}
</style>
