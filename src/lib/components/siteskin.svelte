<script lang="ts">
  import { getSkins, siteskins } from '$lib/skin.svelte';

  let skinStates = getSkins();

  let siteskinElement: HTMLStyleElement | null = $state(null);

  $effect(() => {
    if (!siteskinElement) {
      if (document.getElementById('siteskin-stylesheet')) {
        siteskinElement = document.getElementById('siteskin-stylesheet') as HTMLStyleElement;
      } else {
        siteskinElement = document.createElement('style');
        siteskinElement.id = 'siteskin-stylesheet';
        document.head.appendChild(siteskinElement);
      }
    }
    siteskinElement.textContent = (
      siteskins.find((x) => x.id === skinStates.site) || { stylesheet: '' }
    ).stylesheet;
  });
</script>
