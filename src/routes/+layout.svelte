<script lang="ts">
	import '../app.css';
	import Header from '../lib/components/Header.svelte';
	import Footer from '../lib/components/Footer.svelte';
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';

	let { children } = $props();
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
</script>

<Header />
{@render children()}
<Footer />
