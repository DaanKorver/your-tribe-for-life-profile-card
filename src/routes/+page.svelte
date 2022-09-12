<script lang="ts">
	import '$lib/styles/global.css';
	import Virgo from '$lib/components/Virgo/Virgo.svelte';
	import Background from '$lib/components/Background/Background.svelte';
	import { detailState } from '$lib/state/detail';
	import Detail from '$lib/components/Detail.svelte';
	import { fade } from 'svelte/transition';
	import type { PageData } from './$types';

	export let data: PageData;
	const { stars: starData } = data;
</script>

{#if $detailState.content}
	<div transition:fade>
		<Detail data={$detailState} />
	</div>
{/if}
<Virgo {starData} />
<Background />
