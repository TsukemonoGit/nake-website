<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	//import { languageTag } from '$lib/paraglide/runtime';

	import { chrome, firefox } from '$lib/icons';
</script>

<!-- {languageTag()} -->
<div class="container mx-auto space-y-8 p-8">
	<h1 class="h1">NAKE</h1>
	<p class="!mt-0">Nostr Army Knife Extension</p>
	<p class="description">{m.description()}</p>
	<section>
		<div class="extension-buttons">
			<button type="button" class="variant-filled-tertiary btn flex gap-2"
				><div class="icon">{@html chrome}</div>
				{m.chrome_extension()}</button
			>
			<button type="button" class="variant-filled-tertiary btn flex gap-2"
				><div class="icon">{@html firefox}</div>
				{m.firefox_addon()}</button
			>
		</div>

		<a class="variant-filled-primary btn" href="https://kit.svelte.dev/">SvelteKit</a>
		<a class="variant-filled-secondary btn" href="https://tailwindcss.com/">Tailwind</a>
		<a class="variant-filled-tertiary btn" href="https://github.com/">GitHub</a>
	</section>
</div>

<style lang="postcss">
	.icon {
		@apply h-8 w-8 object-contain text-primary-300;
	}
	.description {
		@apply rounded-md border border-secondary-400 p-4;
	}
	.extension-buttons {
		@apply m-4 flex gap-4;
	}
</style>
