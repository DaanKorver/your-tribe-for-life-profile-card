<script lang="ts">
	import * as prismicH from '@prismicio/helpers';

	export let content: any;
	export let serializer: object = {};
</script>

{@html prismicH.asHTML(content, null, serializer)}
