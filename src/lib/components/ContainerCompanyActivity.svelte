<script lang="ts">
	import Input from './Input.svelte';
</script>

<div class="container-company-activity">
	<label for="activity">
		Atividade econômica principal
		<Input id="activity" />
	</label>
	<div class="container-company-activity-two">
		<label for="code">
			Código
			<Input id="code" />
		</label>
		<label for="secondactivity">
			Atividade
			<Input id="secondactivity" />
		</label>
	</div>
</div>

<style>
	.container-company-activity-two {
		display: grid;
		grid-template-columns: 1fr 3fr;

		gap: 10px;
	}
</style>
