<script>
  import MetaTagItem from './MetaTagItem.svelte';
  import { METATAGS } from '$lib/utils/constants';
</script>

<section class="metatags" id="metatags">
  <h2>Available Metatags</h2>
  <div class="tag-list">
    {#each METATAGS as tag}
      <MetaTagItem {tag} />
    {/each}
  </div>
</section>

<style>
  .metatags {
    margin: 2rem 0;
  }

  .tag-list {
    display: grid;
    gap: 1rem;
    margin-top: 1rem;
  }

  h2 {
    color: var(--color-text);
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }
</style>