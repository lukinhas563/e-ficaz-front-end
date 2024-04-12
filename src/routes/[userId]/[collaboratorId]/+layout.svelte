<script lang="ts">
	export let data;
</script>

<header class="menu">
	<div>
		<div></div>
		<div>{data.collaborator.first_name} {data.collaborator.last_name}</div>
	</div>
</header>
<div class="container">
	<aside class="lateral-menu">
		<ul>
			<li>oi</li>
			<li>oi</li>
			<li>oi</li>
			<li>oi</li>
		</ul>
	</aside>

	<main class="dashboard-container">
		<slot />
	</main>
</div>

<style>
	/* MENU */
	.menu {
		display: flex;
		height: 50px;
	}

	.lateral-menu {
		margin: 10px;
	}
	.lateral-menu ul {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		gap: 20px;

		list-style: none;
	}

	/* CONTAINER */
	.container {
		display: grid;
		grid-template-columns: 1fr 20fr;

		height: 93vh;
	}

	.dashboard-container {
		padding: 20px;

		border-radius: 5px 0;

		background-color: var(--card-background);
	}
</style>
