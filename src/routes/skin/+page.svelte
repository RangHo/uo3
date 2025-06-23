<script lang="ts">
  import { base } from '$app/paths';

  import Chapters from '$lib/components/chapters.svelte';
  import { siteskins, workskins } from '$lib/skin.svelte';

  let skins = [...siteskins, ...workskins].sort((a, b) => {
    return a.id.localeCompare(b.id);
  });
</script>

<Chapters title="Skins" author="">
  <p>Here are the list of all skins available:</p>
  <ul>
    {#each skins as skin}
      <li>
        <a href="{base}/skin/{skin.type}/{skin.id}">({skin.type}) {skin.preview?.name || skin.id}</a
        >
      </li>
    {/each}
  </ul>
</Chapters>
