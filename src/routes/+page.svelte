<script lang="ts">
	//import { languageTag } from '$lib/paraglide/runtime';
	import { _ } from 'svelte-i18n';
	import { chrome, firefox, nakeIcon } from '$lib/icons';
	import Screenshots from '$lib/components/Screenshots.svelte';
	import { page } from '$app/state';
</script>

<!-- {languageTag()} -->
<div class="container mx-auto max-w-screen-lg space-y-8 p-2">
	<h1 class="h1 flex items-end gap-2">
		<div class="w-10">{@html nakeIcon}</div>
		NAKE
	</h1>
	<p class="!mt-0">Nostr Army Knife Extension</p>
	<p class="description">{$_('description')}</p>
	<section class="extension-buttons">
		<a
			href="https://chromewebstore.google.com/detail/nake/pckmdjknadbfalfohabbccmffoohlamk"
			target="_blank"
			rel="noopener noreferrer"
			class="variant-filled-tertiary btn flex gap-2"
			><div class="icon">{@html chrome}</div>
			{$_('chrome_extension')}</a
		>
		<a
			href="https://addons.mozilla.org/ja/firefox/addon/nake/"
			target="_blank"
			rel="noopener noreferrer"
			class="variant-filled-tertiary btn flex gap-2"
			><div class="icon">{@html firefox}</div>
			{$_('firefox_addon')}</a
		>
	</section>
	<section>
		<Screenshots />
	</section>
	<section>
		<nostr-share data-text="Nostr Army Knife Extension" data-url={page.url.href}
			>{$_('share')}</nostr-share
		>
		<script
			src="
		https://cdn.jsdelivr.net/npm/@konemono/nostr-share-component@0.2.0/dist/nostr-share-component.min.js
		"
		></script>
	</section>
</div>

<style lang="postcss">
	.icon {
		@apply h-8 w-8 object-contain text-primary-300;
	}
	.description {
		@apply whitespace-pre-line break-words rounded-md border border-secondary-400 p-4;
	}
	.extension-buttons {
		@apply m-4 flex gap-4;
	}
</style>
