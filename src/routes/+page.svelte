<script lang="ts">
	import '$lib/styles/global.css';
	import Virgo from '$lib/components/Virgo/Virgo.svelte';
	import Background from '$lib/components/Background/Background.svelte';
	import { detailState } from '$lib/state/detail';
	import Detail from '$lib/components/Detail.svelte';
	import { fade } from 'svelte/transition';
</script>

{#if $detailState.content}
	<div transition:fade>
		<Detail data={$detailState} />
	</div>
{/if}
<Virgo />
<Background />
