<script lang="ts">
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import { github } from '$lib/icons';
</script>

<header>
	<div class="header-container">
		NAKE
		<div class="flex h-full items-center gap-2 place-self-end">
			<button class="bg-initial btn-icon btn-icon-sm p-1">{@html github}</button>
			<LightSwitch />
		</div>
	</div>
</header>

<style lang="postcss">
	header {
		@apply sticky top-0 h-10 bg-primary-500/20 font-bold shadow-md backdrop-blur;
	}
	.header-container {
		@apply container mx-auto flex h-full w-full max-w-screen-lg items-center justify-between gap-4 px-2;
	}
</style>
