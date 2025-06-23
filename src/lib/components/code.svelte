<script lang="ts">
  import hljs from 'highlight.js';
  import type { Snippet } from 'svelte';

  interface Props {
    lang: string;
    children: Snippet;
  }

  let { lang, children }: Props = $props();

  let element: HTMLElement;

  function copyToClipboard() {
    if (!element) return;

    const text = element.textContent || '';
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log('Copied to clipboard:', text);
      })
      .catch((err) => {
        console.error('Failed to copy text:', err);
      });
  }

  $effect(() => {
    if (!element) return;

    hljs.highlightElement(element);
  });
</script>

<div>
  <pre><code class="language-{lang}" bind:this={element}>{@render children()}</code></pre>
  <button onclick={copyToClipboard}>Copy!</button>
</div>

<style>
  div {
    position: relative;
  }

  div > button {
    display: none;
  }

  div:hover > button {
    display: block;
    position: absolute;
    top: 1em;
    right: 1em;
    background-color: azure;
  }
</style>
