<script lang="ts">
  import type { PageProps } from './$types';
  import { base } from '$app/paths';

  import Chapters from '$lib/components/chapters.svelte';
  import { skins } from '$lib/skin.svelte';

  let { data }: PageProps = $props();
  let { type } = data;
</script>

<Chapters title="Skins" author="">
  <p>Here are the list of all {type} available:</p>
  <ul>
    {#each skins[type] as skin}
      <li>
        <a href="{base}/skin/{skin.type}/{skin.id}">{skin.preview?.name || skin.id}</a>
      </li>
    {/each}
  </ul>
</Chapters>
