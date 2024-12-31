<script lang="ts">
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import LanguageSwitcher from './LanguageSwitcher.svelte';
	import { github } from '$lib/icons';
</script>

<header>
	<div class="header-container">
		NAKE
		<div class="flex h-full items-center gap-2 place-self-end">
			<button class="bg-initial btn-icon btn-icon-sm p-1">{@html github}</button>
			<LanguageSwitcher />

			<LightSwitch />
		</div>
	</div>
</header>

<style lang="postcss">
	header {
		@apply sticky h-10 bg-primary-500/20 font-bold shadow-md;
	}
	.header-container {
		@apply container mx-auto flex h-full w-full max-w-screen-lg items-center justify-between gap-4 px-8;
	}
</style>
