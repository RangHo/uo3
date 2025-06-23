import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

import { siteskins, workskins, getSkins } from '$lib/skin.svelte';

export const load: PageLoad = async ({ params }) => {
  const { type, id } = params;

  let skins;
  switch (type) {
    case 'siteskins':
      skins = siteskins;
      break;
    case 'workskins':
      skins = workskins;
      break;
    default:
      throw error(404, `Unknown skin type: ${type}`);
  }

  const skin = skins.find((s) => s.id === id);
  if (!skin) {
    throw error(404, `Skin with id ${id} not found`);
  }

  return {
    id,
    type,
    name: skin.preview?.name || skin.id,
    author: skin.preview?.author || 'Unknown Author',
    description: skin.preview?.description || 'No description available',
    stylesheet: skin.stylesheet,
    Preview: skin.preview?.default || null,
  };
};
