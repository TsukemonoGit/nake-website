<script lang="ts">
	import '../app.css';
	import Header from '../lib/components/Header.svelte';
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import '$lib/i18n/index';

	let { children } = $props();
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
</script>

<svelte:head>
	<title>NAKE</title>
	<meta property="og:title" content="NAKE" />
	<!-- <meta property="og:image" content={`${page.url.origin}/ogp.webp`} /> -->

	<meta
		name="description"
		content="This browser extension allows you to easily convert between NOSTR hex IDs and NIP-19 entities (encoded in bech32)."
	/>

	<meta
		property="og:description"
		content="This browser extension allows you to easily convert between NOSTR hex IDs and NIP-19 entities (encoded in bech32)."
	/>
</svelte:head>

<Header />
{@render children()}
