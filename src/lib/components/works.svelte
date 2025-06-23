<script module>
  export { work, type Work };
</script>

<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    title: string;
    description?: Snippet;
    children: Snippet;
  }

  interface Work {
    title: string;
    author: string;
    fandom: string;
  }

  let { title, description, children }: Props = $props();
</script>

{#snippet work()}
  work!
{/snippet}

<main id="main" class="works-index region">
  <h2 class="heading">{title}</h2>
  <p>{@render description?.()}</p>
</main>
