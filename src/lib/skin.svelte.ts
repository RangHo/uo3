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
  eager: true,
  query: '?raw',
  import: 'default',
});

const previews = import.meta.glob<PreviewComponent>('./**/preview.svelte', { eager: true });

function loadSkins(path: 'siteskins' | 'workskins') {
  const result = [] as Skin[];
  for (let key in styles) {
    if (key.split('/')[1] !== path) {
      continue;
    }
    const id = key.split('/')[2];
    const stylesheet = styles[key];
    const preview = previews[`./${path}/${id}/preview.svelte`];
    result.push({
      type: path,
      id,
      stylesheet,
      preview,
    });
  }
  return result;
}

export const siteskins = loadSkins('siteskins');

export const workskins = loadSkins('workskins');

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
