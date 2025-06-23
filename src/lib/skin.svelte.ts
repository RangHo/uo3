import type { Component } from 'svelte';

type PreviewComponent = {
  name: string;
  author: string;
  description: string;
  default: Component;
};

type Skin = {
  type: 'siteskins' | 'workskins';
  id: string;
  stylesheet: string;
  preview?: PreviewComponent;
};

const styles = import.meta.glob<string>('./**/style.css', {
  query: '?raw',
  import: 'default',
});

const previews = import.meta.glob<PreviewComponent>('./**/preview.svelte');

async function loadSkins(path: 'siteskins' | 'workskins') {
  const result = [] as Skin[];
  for (let key in styles) {
    if (key.split('/')[1] !== path) {
      continue;
    }
    const id = key.split('/')[2];
    const stylesheet = await styles[key]();
    const preview = previews[`./${path}/${id}/preview.svelte`]
      ? await previews[`./${path}/${id}/preview.svelte`]()
      : undefined;
    result.push({
      type: path,
      id,
      stylesheet,
      preview,
    });
  }
  return result;
}

export const siteskins = await loadSkins('siteskins');

export const workskins = await loadSkins('workskins');

export const skins = { siteskins, workskins };

let siteskin = $state('');

let workskin = $state('');

export function getSkins() {
  return {
    get work() {
      return workskin;
    },
    set work(value: string) {
      workskin = value;
    },
    get site() {
      return siteskin;
    },
    set site(value: string) {
      siteskin = value;
    },
  };
}
