import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
  const { type } = params;

  if (type !== 'siteskins' && type !== 'workskins') {
    throw error(404, 'Invalid skin type. Valid types are "siteskins" or "workskins".');
  }

  return { type: type as 'siteskins' | 'workskins'};
};
