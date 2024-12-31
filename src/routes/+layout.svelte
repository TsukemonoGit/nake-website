<script lang="ts">
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import '../app.css';
	import Header from '../lib/components/Header.svelte';
	import Footer from '../lib/components/Footer.svelte';
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';

	let { children } = $props();
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
</script>

<ParaglideJS {i18n}>
	<Header />
	{@render children()}
	<Footer />
</ParaglideJS>
