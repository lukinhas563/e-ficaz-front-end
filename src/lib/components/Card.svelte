<script lang="ts">
	export let first_name = ' ';
	export let last_name = ' ';
	export let id = 0;
	export let userId = 0;
</script>

<a href={`./${userId}/${id}`} class="container">
	<div class="photo"></div>

	<p>{first_name} {last_name}</p>
</a>

<style>
	.container {
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;

		height: 10rem;
		width: 10rem;

		gap: 20px;

		padding: 20px;

		border-radius: 5px;

		color: var(--main-color);

		cursor: pointer;

		text-decoration: none;

		background-color: var(--card-background);
	}

	.photo {
		height: 60px;
		width: 60px;

		border-radius: 50%;

		background-color: red;
	}

	.container:hover {
		height: 12rem;
		width: 12rem;
	}
	.container:hover .photo {
		height: 80px;
		width: 80px;
	}
	.container:hover p {
		font-size: 20px;
	}
</style>
