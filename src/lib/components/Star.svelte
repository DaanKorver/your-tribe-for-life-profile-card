<script lang="ts">
	import Tooltip from './Tooltip.svelte';
	import { starState } from '$lib/state/star';

	export let cx: number;
	export let cy: number;
	export let radius: string;

	const maxSpeed = 1.5;
	const minSpeed = 0.9;
	const pulseSpeed = Math.round((Math.random() * (maxSpeed - minSpeed + 1) + minSpeed) * 100) / 100;

	const minPulse = 1.8;
	const pulseDistance = 0.6;
	const maxPulse = minPulse + pulseDistance;
</script>

<Tooltip x={cx} y={cy} text="Tooltip komt hier" visible={$starState.active === `${cx}${cy}`} />

<g
	class={`${$starState.active == `${cx}${cy}` ? 'blur' : ''}`}
	style={`transform-origin: ${cx}px ${cy}px`}
>
	<circle
		{cx}
		{cy}
		r={radius}
		fill="var(--star)"
		class="star"
		style={`transform-origin: ${cx}px ${cy}px`}
	/>
	<circle
		{cx}
		{cy}
		r={radius}
		fill="var(--star)"
		class="star pulsing light"
		style={`--speed: ${pulseSpeed}s; --mxPulse: ${minPulse}; transform-origin: ${cx}px ${cy}px`}
	/>
	<circle
		{cx}
		{cy}
		r={radius}
		fill="var(--star)"
		class="star pulsing lighter"
		style={`--speed: ${pulseSpeed}s; --mxPulse: ${maxPulse}; transform-origin: ${cx}px ${cy}px`}
	/>
</g>
<rect
	class="tooltip-wrapper"
	on:click={() => console.log('event')}
	on:keydown={(e) => {
		if (e.key === 'Enter') {
			console.log('event');
		}
	}}
	width="75"
	height="75"
	x={cx - 75 / 2}
	y={cy - 75 / 2}
	on:mouseover={() => starState.set({ active: `${cx}${cy}`, hovering: true })}
	on:focus={() => starState.set({ active: `${cx}${cy}`, hovering: true })}
	on:mouseout={() => starState.set({ active: '', hovering: false })}
	on:blur={() => starState.set({ active: '', hovering: false })}
/>

<style>
	@keyframes pulse {
		0% {
			transform: scale(1);
		}

		100% {
			transform: scale(var(--mxPulse));
		}
	}

	.tooltip-wrapper {
		pointer-events: all;
		cursor: pointer;
		border-radius: 50%;
	}

	.tooltip-wrapper:focus-visible,
	.tooltip-wrapper:hover {
		outline: 2px solid rgba(255, 255, 255, 0.5);
	}

	.star {
		position: relative;
		opacity: 1;
		pointer-events: none;
		transition: 300ms fill ease-in, 300ms transform ease-in-out;
	}

	.pulsing {
		animation: pulse var(--speed) ease-out infinite forwards alternate;
		transition: 600ms opacity ease-out;
	}

	.light {
		opacity: 0.4;
	}

	.lighter {
		opacity: 0.2;
	}

	g {
		transition: 300ms transform ease-in-out, 300ms opacity ease-in-out;
	}

	.blur > .star {
		transform: scale(1.5);
		fill: palegoldenrod;
	}
</style>
