<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    title: string;
    children: Snippet;
  }

  let { title, children }: Props = $props();
</script>

<main id="main" class="system docs about region">
  <h2 class="heading">{title}</h2>
  <div class="userstuff">
    {@render children()}
  </div>
  <div class="clear"></div>
</main>
