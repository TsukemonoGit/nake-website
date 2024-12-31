<script lang="ts">
	import { arrow } from '$lib/icons';
	import { base } from '$app/paths';
	let elemCarousel: HTMLDivElement;
	const screenshots = [
		{ src: `${base}/screenshot2.png`, text: 'id → note etc.', title: 'Content Select Popup' },
		{ src: `${base}/screenshot1.png`, text: 'number → local time', title: 'Content Select Popup' },
		{ src: `${base}/image.png`, text: 'a tag → naddr', title: 'Extension Menu' },
		{ src: `${base}/screenshot3.png`, text: 'nsec → ncryptsec', title: 'Extension Menu' }
	];
	function carouselLeft(): void {
		const x =
			elemCarousel.scrollLeft === 0
				? elemCarousel.clientWidth * elemCarousel.childElementCount // loop
				: elemCarousel.scrollLeft - elemCarousel.clientWidth; // step left
		elemCarousel.scroll(x, 0);
	}

	function carouselRight(): void {
		const x =
			elemCarousel.scrollLeft === elemCarousel.scrollWidth - elemCarousel.clientWidth
				? 0 // loop
				: elemCarousel.scrollLeft + elemCarousel.clientWidth; // step right
		elemCarousel.scroll(x, 0);
	}
	function carouselThumbnail(index: number) {
		elemCarousel.scroll(elemCarousel.clientWidth * index, 0);
	}
</script>

<!-- 
<h3 class="h3">Content Select Popup</h3>
<div class="card">
	id → note etc.
	<img width={420} src="/screenshot2.png" alt="Screenshot 1" />
</div>
<div class="card">
	number → local time
	<img src="/screenshot1.png" alt="Screenshot 1" />
</div>

<h3 class="h3">Extension Menu</h3>
<div class="card">
	a tag → naddr
	<img src="/image.png" alt="Screenshot 1" />
</div>
<div class="card">
	number → local time
	<img src="/image.png" alt="Screenshot 1" />
</div> -->

<div class="card mx-auto grid grid-cols-[auto_1fr_auto] items-center gap-4 p-4">
	<!-- Button: Left -->
	<button type="button" class="variant-filled btn-icon" on:click={carouselLeft}>
		<!-- <i class="fa-solid fa-arrow-left" />👈️ -->
		{@html arrow}
	</button>
	<!-- Full Images -->
	<div bind:this={elemCarousel} class=" flex snap-x snap-mandatory overflow-x-auto scroll-smooth">
		{#each screenshots as { src, text, title }}
			<div class=" min-w-[min(1024px,100%)] snap-center object-contain rounded-container-token">
				<h3 class="h3">{title}</h3>
				<img
					class="mx-auto snap-center object-contain rounded-container-token"
					{src}
					alt={'image'}
					loading="lazy"
				/>
				<div class="text-center">{text}</div>
			</div>
		{/each}
	</div>
	<!-- Button: Right -->
	<button type="button" class="variant-filled btn-icon rotate-180" on:click={carouselRight}>
		<!-- <i class="fa-solid fa-arrow-right " />👉️ -->{@html arrow}
	</button>
</div>

<div class="card mx-auto mt-2 grid grid-cols-6 gap-4 p-4">
	{#each screenshots as { src, text }, i}
		<button type="button" on:click={() => carouselThumbnail(i)}>
			<!-- svelte-ignore a11y_img_redundant_alt -->
			<img class="rounded-container-token" {src} alt="image" loading="lazy" />
		</button>
	{/each}
</div>
