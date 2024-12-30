<script lang="ts">
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import LanguageSwitcher from './LanguageSwitcher.svelte';
</script>

<header>
	<div class="header-container">
		<LanguageSwitcher />
		<LightSwitch />
	</div>
</header>

<style lang="postcss">
	header {
		@apply sticky h-8 bg-primary-500/20;
	}
	.header-container {
		@apply container mx-auto flex h-full w-full items-center justify-between;
	}
</style>
