<script lang="ts">
	import Chart from 'chart.js/auto';

	let ctx: HTMLCanvasElement | undefined;
	let chart: Chart | undefined;

	$: if (ctx) {
		if (chart) {
			chart.destroy();
		}

		chart = new Chart(ctx, {
			type: 'doughnut',
			data: {
				datasets: [
					{
						label: 'My First Dataset',
						data: [100, 50, 20],
						backgroundColor: ['rgb(58, 168, 189)', 'rgb(114, 74, 188)', 'rgb(255, 186, 83)'],
						hoverOffset: 4,
						borderWidth: 0
					}
				]
			},
			options: {
				cutout: 70 // Define o valor do cutout para 0 para remover a borda branca
			}
		});
	}
</script>

<div class="container-data">
	<div class="total">
		<p>180</p>
		<p>Empresas</p>
	</div>
	<canvas bind:this={ctx} width="1" height="0.5px"></canvas>
	<ul>
		<li>
			Empresas do <span class="simples">Simples Nacional</span>
			<div class="value">50</div>
		</li>
		<li>
			Empresas do <span class="presumido">Lucro Presumido</span>
			<div class="value">50</div>
		</li>
		<li>
			Empresas do <span class="real">Lucro Real</span>
			<div class="value">50</div>
		</li>
	</ul>
</div>

<style>
	.container-data {
		position: relative;

		display: flex;
		justify-content: center;
		align-items: center;

		gap: 30px;
	}

	.container-data ul {
		display: flex;
		flex-direction: column;

		gap: 10px;

		list-style: none;
	}

	.container-data ul li {
		font-size: 12px;
	}

	/* TAX REGIME */

	.simples {
		color: rgb(58, 168, 189);
		font-weight: 700;
	}
	.presumido {
		color: rgb(114, 74, 188);
		font-weight: 700;
	}
	.real {
		color: rgb(255, 186, 83);
		font-weight: 700;
	}

	.total {
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;

		position: absolute;

		top: 80px;
		left: 70px;
	}

	.value {
		font-size: 30px;
	}
</style>
