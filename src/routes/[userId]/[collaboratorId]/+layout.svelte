<script lang="ts">
	import IconTasks from '$lib/components/icons/IconTasks.svelte';
	import IconEmployees from '$lib/components/icons/IconEmployees.svelte';
	import IconCompany from '$lib/components/icons/IconCompany.svelte';
	import IconDashboard from '$lib/components/icons/IconDashboard.svelte';

	export let data;

	const userId = data.user.id;
	const collaboratorId = data.collaborator.id;

	let selected = 'dashboard';
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
			<li class:selected={selected === 'dashboard' ? true : false}>
				<a href={`/${userId}/${collaboratorId}`} on:click={() => (selected = 'dashboard')}
					><IconDashboard /></a
				>
			</li>
			<li class:selected={selected === 'companies' ? true : false}>
				<a href={`/${userId}/${collaboratorId}/companies`} on:click={() => (selected = 'companies')}
					><IconCompany /></a
				>
			</li>
			<li class:selected={selected === 'employees' ? true : false}>
				<a href={`/${userId}/${collaboratorId}/employees`} on:click={() => (selected = 'employees')}
					><IconEmployees /></a
				>
			</li>
			<li class:selected={selected === 'tasks' ? true : false}>
				<a href={`/${userId}/${collaboratorId}/tasks`} on:click={() => (selected = 'tasks')}
					><IconTasks /></a
				>
			</li>
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
		margin-top: 10px;
	}
	.lateral-menu ul {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		gap: 20px;

		list-style: none;
	}

	.lateral-menu ul li {
		display: flex;
		justify-content: center;
		align-items: center;

		width: 100%;
		height: 50px;
	}
	.lateral-menu ul li:hover {
		border-left: 3px solid var(--main-color);
	}
	.selected {
		border-left: 3px solid var(--main-color);
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
