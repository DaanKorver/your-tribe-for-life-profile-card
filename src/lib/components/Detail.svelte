<script lang="ts">
	import { detailState, type detailProps } from '$lib/state/detail';

	export let data: detailProps;

	const { title, content } = data;
</script>

<section>
	<button on:click={() => detailState.set({ title: '', content: '' })}>Terug naar de sterren</button
	>
	<div>
		<h1>{title}</h1>
		<p>{content}</p>
	</div>
</section>

<style>
	section {
		position: fixed;
		top: 0;
		left: 0;
		background-color: #fff;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	div {
		max-width: 32.5rem;
		text-align: left;
	}

	h1 {
		font-size: 4rem;
		text-transform: uppercase;
		margin-bottom: 1rem;
	}

	p {
		font-size: 1.25rem;
	}

	button {
		border: 2px solid #0f0f0f;
		color: #0f0f0f;
		background-color: transparent;
		padding: 1rem;
		position: absolute;
		left: 15px;
		top: 15px;
		transition: 150ms color ease-in-out, 150ms background-color ease-in-out;
	}

	button:hover,
	button:focus {
		background-color: #0f0f0f;
		color: white;
	}
</style>
