<script lang="ts">
	import ContainerCompanyInfo from './ContainerCompanyInfo.svelte';
	import ContainerCompanyActivity from './ContainerCompanyActivity.svelte';
	import ContainerCompanyAddress from './ContainerCompanyAddress.svelte';

	let selected = 'info';
</script>

<form class="main-form" method="post">
	<div class="container-stage">
		<p class:selected={selected === 'info' ? true : false}>1</p>
		<p class:selected={selected === 'activity' ? true : false}>2</p>
		<p class:selected={selected === 'address' ? true : false}>3</p>
	</div>
	{#if selected === 'info'}
		<ContainerCompanyInfo />
	{:else if selected === 'activity'}
		<ContainerCompanyActivity />
	{:else if selected === 'address'}
		<ContainerCompanyAddress />
	{/if}

	<div class="container-button">
		{#if selected === 'info'}
			<button on:click|preventDefault={() => (selected = 'activity')} class="next">Proximo</button>
		{:else if selected === 'activity'}
			<button on:click|preventDefault={() => (selected = 'info')} class="back">Voltar</button>
			<button on:click|preventDefault={() => (selected = 'address')} class="next">Proximo</button>
		{:else if selected === 'address'}
			<button on:click|preventDefault={() => (selected = 'activity')} class="back">Voltar</button>
			<button on:click|preventDefault={() => console.log('sended')} class="next">Enviar</button>
		{/if}
	</div>
</form>

<style>
	.main-form {
		position: relative;

		display: flex;
		flex-direction: column;
		justify-content: center;

		margin: 30px;

		gap: 20px;

		height: 80%;
	}

	.container-stage {
		position: absolute;

		display: flex;
		flex-direction: row;
		justify-content: space-around;

		top: 0;

		width: 100%;
	}

	.container-stage p {
		display: flex;
		align-items: center;
		justify-content: center;

		height: 50px;
		width: 50px;

		border-radius: 50%;
	}

	.selected {
		background-color: var(--contrast-color);
	}

	.container-button {
		display: flex;

		position: absolute;

		bottom: 0;

		gap: 50px;

		width: 100%;
	}

	.next {
		border: none;

		height: 30px;
		width: 90px;

		cursor: pointer;

		color: var(--main-color);

		background-color: var(--contrast-color);
	}
	.back {
		border: none;

		background: none;

		cursor: pointer;

		color: var(--main-color);
	}
	.back:hover {
		text-decoration: underline;
	}
</style>
