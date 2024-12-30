<script>
  import { USAGE_EXAMPLES } from '$lib/utils/constants';
</script>

<section class="usage-guide" id="usage">
  <h2>Usage Guide</h2>
  <div class="examples">
    {#each USAGE_EXAMPLES as example}
      <div class="example">
        <h3>{example.title}</h3>
        <pre><code>{example.code}</code></pre>
        <p>{example.description}</p>
      </div>
    {/each}
  </div>
</section>

<style>
  .usage-guide {
    margin: 2rem 0;
  }

  .examples {
    display: grid;
    gap: 2rem;
  }

  .example {
    background: var(--color-bg-code);
    padding: 1.5rem;
    border-radius: 4px;
  }

  h3 {
    color: var(--color-primary);
    margin-bottom: 1rem;
  }

  pre {
    background: #fff;
    margin: 1rem 0;
  }
</style>