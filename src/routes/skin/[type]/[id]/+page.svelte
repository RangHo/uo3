<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import type { PageProps } from './$types';

  import Chapters from '$lib/components/chapters.svelte';
  import Code from '$lib/components/code.svelte';
  import LoremIpsum from '$lib/components/lorem-ipsum.svelte';
  import { getSkins } from '$lib/skin.svelte';

  let { data }: PageProps = $props();
  let { id, type, name, author, description, stylesheet, Preview } = data;

  const skinStates = getSkins();
  const previousStates = $state.snapshot(skinStates);
  
  onMount(() => {
    $inspect(skinStates[type === 'siteskins' ? 'site' : 'work']);
    skinStates[type === 'siteskins' ? 'site' : 'work'] = id;
  });

  onDestroy(() => {
    const prop = type === 'siteskins' ? 'site' : 'work';
    skinStates[prop] = previousStates[prop];
    });
</script>

<Chapters title={name} {author} summary={description}>
  {#if Preview}
    <Preview />
  {:else}
    <LoremIpsum />
    {/if}
    <hr />
    <Code lang="css">
    {stylesheet}
    </Code>
</Chapters>
