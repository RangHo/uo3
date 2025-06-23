<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    title: string;
    author: string;
    summary?: string;
    notes?: string;
    children: Snippet;
  }

  let { title, author, summary, notes, children }: Props = $props();
</script>

<main id="main" class="chapters-show region">
  <div id="workskin">
    <div class="preface group">
      <h2 class="title heading">
        {title}
      </h2>
      <h3 class="byline heading">
        {@html author}
      </h3>
      {#if summary}
        <div class="summary module">
          <h3 class="heading">Summary:</h3>
          <blockquote class="userstuff">
            {@html summary}
          </blockquote>
        </div>
      {/if}
      {#if notes}
        <div class="notes module">
          <h3 class="heading">Notes:</h3>
          {@html notes}
        </div>
      {/if}
    </div>
    <div id="chapters">
      <div id="chapter-1" class="chapter">
        <div class="userstuff module">
          {@render children()}
        </div>
      </div>
    </div>
  </div>
</main>
