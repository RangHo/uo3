<script lang="ts">
  import { getSkins, workskins } from '$lib/skin.svelte';

  let skinStates = getSkins();

  let workskinElement: HTMLStyleElement | null = $state(null);

  $effect(() => {
    if (!workskinElement) {
      if (document.getElementById('workskin-stylesheet')) {
        workskinElement = document.getElementById('workskin-stylesheet') as HTMLStyleElement;
      } else {
        workskinElement = document.createElement('style');
        workskinElement.id = 'workskin-stylesheet';
        document.head.appendChild(workskinElement);
      }
    }
    workskinElement.textContent = (
      workskins.find((x) => x.id === skinStates.work) || { stylesheet: '' }
    ).stylesheet;
  });
</script>
