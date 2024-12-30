<script>
	import MetatagSection from '$lib/components/sections/MetatagSection.svelte';
	import CustomModeSection from '$lib/components/sections/CustomModeSection.svelte';
	import InstrumentalSection from '$lib/components/sections/InstrumentalSection.svelte';
	import MusicStyleSection from '$lib/components/sections/MusicStyleSection.svelte';
</script>

<section>
	<h2>Key Integration with SUNO AI</h2>
	<MetatagSection />
	<CustomModeSection />
	<InstrumentalSection />
	<MusicStyleSection />
</section>

<style>
	h2 {
		color: #444;
		margin-top: 2rem;
		font-size: 1.75rem;
	}
</style>