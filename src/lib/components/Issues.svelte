<script lang="ts">
	import { t as _ } from '@konemono/svelte5-i18n';
	import { github } from '$lib/icons';
</script>

<div class="card my-6 p-4">
	<p>{$_('issues')}</p>
	<a
		href="https://github.com/TsukemonoGit/nake/issues/new"
		target="_blank"
		rel="noopener noreferrer"
		class="variant-ghost-primary btn mt-4"
	>
		<div class="w-6">{@html github}</div>
		<div class="font-bold">Create Issue</div>
	</a>
</div>
