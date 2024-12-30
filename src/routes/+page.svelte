<script>
  import Header from '$lib/components/Header/Header.svelte';
  import MetaTagList from '$lib/components/MetaTags/MetaTagList.svelte';
  import MusicStyleSection from '$lib/components/sections/MusicStyleSection.svelte';
  import UsageGuide from '$lib/components/sections/UsageGuide.svelte';
</script>

<svelte:head>
  <title>Suno & UDIO Helper Documentation</title>
  <meta name="description" content="Documentation and metatag guide for Suno & UDIO Helper" />
</svelte:head>

<Header />

<div class="content">
  <MetaTagList />
  <MusicStyleSection />
  <UsageGuide />
</div>

<style>
  .content {
    padding: 2rem;
    max-width: 800px;
    margin: 0 auto;
  }
</style>