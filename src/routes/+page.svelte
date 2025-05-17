<script lang="ts">
	//import { languageTag } from '$lib/paraglide/runtime';
	import { t as _ } from '@konemono/svelte5-i18n';
	import { chrome, firefox, nakeIcon } from '$lib/icons';
	import Screenshots from '$lib/components/Screenshots.svelte';
	import { page } from '$app/state';
	import Issues from '$lib/components/Issues.svelte';
	import NostrIcon from '$lib/components/NostrIcon.svelte';
</script>

<!-- {languageTag()} -->
<div class="container mx-auto max-w-screen-lg space-y-8 p-2">
	<div class="flex w-fit flex-wrap items-end gap-2">
		<div class="w-10">{@html nakeIcon}</div>
		<h1 class="h1">NAKE</h1>
		<p class="!mt-0">Nostr Army Knife Extension</p>
	</div>
	<section>
		<div class="description card variant-outline-tertiary">{$_('description')}</div>
		<div class="extension-buttons">
			<a
				href="https://chromewebstore.google.com/detail/nake/pckmdjknadbfalfohabbccmffoohlamk"
				target="_blank"
				rel="noopener noreferrer"
				class="variant-filled-tertiary btn flex h-fit gap-2"
				><div class="icon">{@html chrome}</div>
				{$_('chrome_extension')}</a
			>
			<a
				href="https://addons.mozilla.org/ja/firefox/addon/nake/"
				target="_blank"
				rel="noopener noreferrer"
				class="variant-filled-tertiary btn !mt-0 flex h-fit gap-2"
				><div class="icon">{@html firefox}</div>
				{$_('firefox_addon')}</a
			>
		</div>
	</section>
	<section>
		<h2 class="h2">Screenshots</h2>
		<div>
			<Screenshots />
		</div>
	</section>
	<section>
		<h2 class="h2">Report Issues & Feedback</h2>
		<Issues />
	</section>
	<section class="flex">
		{#await import('@konemono/nostr-share-component') then}
			<nostr-share
				data-text="Nostr Army Knife Extension"
				data-url={page.url.href}
				data-style="width:fit-content"
			>
				<NostrIcon size={28} />{$_('share')}
			</nostr-share>
		{/await}
	</section>
</div>

<style lang="postcss">
	section {
		@apply space-y-6 py-4;
	}
	.icon {
		@apply h-8 w-8 object-contain text-primary-300;
	}
	.description {
		@apply whitespace-pre-line break-words p-4;
	}
	.extension-buttons {
		@apply m-4 flex flex-row gap-6 py-4;
	}
</style>
