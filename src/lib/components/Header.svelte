<script lang="ts">
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import { github, nakeIcon } from '$lib/icons';
</script>

<header>
	<div class="header-container">
		<div class="flex items-center gap-2">
			<div class="w-6">{@html nakeIcon}</div>
			NAKE
		</div>
		<div class="flex h-full items-center gap-2 place-self-end">
			<button
				class="variant-ghost-primary btn btn-sm"
				data-npub="npub1sjcvg64knxkrt6ev52rywzu9uzqakgy8ehhk8yezxmpewsthst6sw3jqcw"
				data-naddr="naddr1qqzxucttv5pzpp9sc34tdxdvxh4jeg5xgu9ctcypmvsg0n00vwfjydkrjaqh0qh4qvzqqqru7cup3l2d"
				data-relays="wss://relay.damus.io,wss://relay.snort.social,wss://nostr.wine,wss://relay.nostr.band"
			>
				Support with Zap ⚡️
			</button>
			<a
				href="https://github.com/TsukemonoGit/nake"
				target="_blank"
				rel="noopener noreferrer"
				class="bg-initial btn-icon btn-icon-sm p-1">{@html github}</a
			>
			<LightSwitch />
		</div>
	</div>
</header>

<style lang="postcss">
	header {
		@apply sticky top-0 z-10 h-10 bg-primary-500/20 font-bold shadow-md backdrop-blur;
	}
	.header-container {
		@apply container mx-auto flex h-full w-full max-w-screen-lg items-center justify-between gap-4 px-2;
	}
</style>
