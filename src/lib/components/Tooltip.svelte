<script lang="ts">
	export let x: number;
	export let y: number;
	export let text: string;
	export let visible: boolean;
	export let disabled: boolean = true;
</script>

<foreignObject
	x={x - 50}
	y={y - 100}
	width="100"
	height="150"
	class={`tooltip ${visible && 'show'} ${disabled && 'disabled'}`}
>
	<html:button class="button">{text}</html:button>
</foreignObject>

<style>
	.tooltip {
		color: black;
		text-align: center;
		opacity: 0;
		font-size: 1.25rem;
		transition: 150ms opacity ease-in-out;
		overflow: visible;
	}

	.button {
		padding: 0.5rem 1rem;
		background-color: white;
		border-radius: 0.5rem;
		position: absolute;
		top: 10px;
		z-index: 2;
		left: 50%;
		transform: translateX(-50%);
		white-space: nowrap;
	}

	.tooltip.show {
		opacity: 1;
	}

	.tooltip.disabled {
		color: #9d9d9d;
	}

	.tooltip.disabled .button {
		background-color: rgb(235, 235, 228);
	}
</style>
