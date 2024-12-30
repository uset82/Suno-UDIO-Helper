<script>
  import { MUSIC_GENRES } from '$lib/utils/constants';
</script>

<section class="section">
  <h3>Music Style Description</h3>
  <p>SUNO AI uses a concise description style limited to 108 characters, describing the style of music you want:</p>
  
  <div class="genres">
    {#each MUSIC_GENRES as genre}
      <span class="genre">{genre}</span>
    {/each}
  </div>
  
  <div class="note">
    <p>When describing music style, use this format:</p>
    <pre>style of music: Classic Rock, Arena Rock, Hard Rock, 80s Rock</pre>
  </div>
</section>

<style>
  .section {
    margin: 2rem 0;
  }
  
  h3 {
    color: #555;
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }
  
  .genres {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    background: var(--color-bg-code);
    padding: 1rem;
    border-radius: 4px;
    margin: 1rem 0;
  }

  .genre {
    background: #fff;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.9rem;
  }
  
  .note {
    margin-top: 2rem;
    padding: 1rem;
    border-left: 4px solid var(--color-primary);
    background: var(--color-bg-code);
  }
</style>