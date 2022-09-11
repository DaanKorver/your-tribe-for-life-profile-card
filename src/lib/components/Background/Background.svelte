<script lang="ts">
	import { onMount } from 'svelte';
	import { Star } from './Star';
	import { debounce } from '$lib/helpers/debounce';

	let width: number;
	let height: number;
	let canvas: HTMLCanvasElement;

	const maxStars = 150;
	let ctx: CanvasRenderingContext2D | null = null;
	let stars: Star[] = [];

	onMount(() => {
		if (canvas) {
			canvas.width = width;
			canvas.height = height;
			ctx = canvas.getContext('2d');
			if (ctx) {
				ctx.shadowBlur = 15;
				ctx.shadowColor = '#fff';

				for (let i = 0; i < maxStars; i++) {
					if (!ctx) return;
					stars.push(new Star(width, height, ctx));
				}
			}
		}
		animate();
	});

	function animate() {
		ctx?.clearRect(0, 0, width, height);
		for (let i = 0; i < maxStars; i++) {
			stars[i].draw();
			stars[i].animate();
		}
		requestAnimationFrame(animate);
	}

	function handleResize() {
		width = window.innerWidth;
		height = window.innerHeight;
		canvas.width = width;
		canvas.height = height;
		stars = [];
		for (let i = 0; i < maxStars; i++) {
			if (!ctx) return;
			stars.push(new Star(width, height, ctx));
			stars[i].draw();
			stars[i].animate();
		}
	}
</script>

<svelte:window
	bind:innerWidth={width}
	bind:innerHeight={height}
	on:resize={debounce(handleResize, 300)}
	on:load={handleResize}
/>

<canvas bind:this={canvas} />

<style>
	canvas {
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
	}
</style>
