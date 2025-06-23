<script lang="ts">
  import type { LayoutProps } from './$types';

  import Footer from '$lib/components/footer.svelte';
  import Header from '$lib/components/header.svelte';
  import SiteSkin from '$lib/components/siteskin.svelte';
  import WorkSkin from '$lib/components/workskin.svelte';

  let { children }: LayoutProps = $props();
</script>

<SiteSkin />
<WorkSkin />

<div id="outer" class="wrapper">
  <Header />
  <div id="inner" class="wrapper">
    {@render children()}
  </div>
  <Footer />
</div>
