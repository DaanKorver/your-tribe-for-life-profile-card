<script lang="ts">
	import { starState } from '$lib/state/star';

	import Star from '../Star.svelte';

	export let starData: any[];

	const starPositions = [
		[889, 12],
		[817, 285],
		[430, 193],
		[570, 327],
		[712, 379],
		[427, 548],
		[629, 731],
		[374, 890],
		[295, 813],
		[150, 911],
		[255, 603],
		[12, 765]
	];

	let stars: any[] = [];

	for (let i = 0; i < starPositions.length; i++) {
		const [x, y] = starPositions[i];
		starData[i] ? stars.push({ ...starData[i], x, y }) : stars.push({ x, y });
	}
</script>

<div>
	<svg
		width="901"
		height="923"
		viewBox="0 0 901 923"
		fill="none"
		class={`${$starState.hovering ? 'hover' : ''}`}
		xmlns="http://www.w3.org/2000/svg"
		style="--line: rgba(255,255,255,0.5); --star: rgba(255,255,255,1); --line-width: 4;"
	>
		{#each stars as star}
			<Star cx={star.x} cy={star.y} data={[star.title, star.content]} radius="8" />
		{/each}
		<line
			x1="887.939"
			y1="12.4901"
			x2="818.939"
			y2="285.49"
			stroke="var(--line)"
			class="line"
			stroke-width="var(--line-width)"
		/>
		<line
			x1="818.342"
			y1="285.483"
			x2="713.342"
			y2="380.483"
			stroke="var(--line)"
			class="line"
			stroke-width="var(--line-width)"
		/>
		<line
			x1="569.683"
			y1="325.12"
			x2="712.683"
			y2="377.12"
			stroke="var(--line)"
			class="line"
			stroke-width="var(--line-width)"
		/>
		<line
			x1="430.388"
			y1="190.56"
			x2="570.388"
			y2="325.56"
			stroke="var(--line)"
			class="line"
			stroke-width="var(--line-width)"
		/>
		<line
			x1="571.684"
			y1="326.08"
			x2="428.684"
			y2="549.08"
			stroke="var(--line)"
			class="line"
			stroke-width="var(--line-width)"
		/>
		<line
			x1="712.948"
			y1="379.454"
			x2="630.948"
			y2="731.454"
			stroke="var(--line)"
			class="line"
			stroke-width="var(--line-width)"
		/>
		<line
			x1="427.339"
			y1="546.515"
			x2="630.339"
			y2="729.515"
			stroke="var(--line)"
			class="line"
			stroke-width="var(--line-width)"
		/>
		<line
			x1="427.609"
			y1="549.905"
			x2="255.609"
			y2="604.905"
			stroke="var(--line)"
			class="line"
			stroke-width="var(--line-width)"
		/>
		<line
			x1="256.109"
			y1="604.664"
			x2="13.1094"
			y2="766.664"
			stroke="var(--line)"
			class="line"
			stroke-width="var(--line-width)"
		/>
		<line
			x1="630.063"
			y1="731.694"
			x2="375.063"
			y2="891.694"
			stroke="var(--line)"
			class="line"
			stroke-width="var(--line-width)"
		/>
		<line
			x1="295.396"
			y1="810.568"
			x2="375.396"
			y2="888.568"
			stroke="var(--line)"
			class="line"
			stroke-width="var(--line-width)"
		/>
		<line
			x1="147.888"
			y1="908.338"
			x2="292.888"
			y2="811.338"
			stroke="var(--line)"
			class="line"
			stroke-width="var(--line-width)"
		/>
	</svg>
</div>

<style>
	div {
		width: 100%;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	div > svg {
		width: 90%;
		max-width: 60rem;
		max-height: 40rem;
		overflow: visible;
	}

	:global(svg.hover > g:not(.blur)) {
		opacity: 0;
	}

	:global(svg.hover > g:not(.blur)) {
		opacity: 0.5;
	}

	:global(svg.hover > g:not(.blur) > .pulsing) {
		opacity: 0;
	}
</style>
