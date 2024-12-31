<script lang="ts">
	import { availableLanguageTags, languageTag } from '$lib/paraglide/runtime.js';
	import { i18n } from '$lib/i18n';
	import { page } from '$app/state';
	import { popup, type PopupSettings } from '@skeletonlabs/skeleton';

	let languageNames = new Intl.DisplayNames(['en'], { type: 'language' });

	const popupFeatured: PopupSettings = {
		// Represents the type of event that opens/closed the popup
		event: 'click',
		// Matches the data-popup value on your popup element
		target: 'popupFeatured',
		// Defines which side of your trigger the popup will appear
		closeQuery: '#will-close',
		placement: 'bottom'
	};
</script>

<button class="variant-ghost-primary btn btn-sm" use:popup={popupFeatured}
	>{languageNames.of(languageTag()) ?? languageTag()}</button
>

<div class="card z-10 w-72 p-4 shadow-xl" data-popup="popupFeatured">
	<div class="flex flex-col space-y-2">
		{#each availableLanguageTags as lang}
			<!-- the hreflang attribute decides which language the link points to -->

			<a
				class="item"
				href={i18n.route(page.url.pathname)}
				hreflang={lang}
				aria-current={lang === languageTag() ? 'page' : undefined}
				>{languageNames.of(lang) ?? lang}</a
			>
		{/each}
	</div>
</div>

<style lang="postcss">
	.item {
		@apply w-full;
	}
</style>
