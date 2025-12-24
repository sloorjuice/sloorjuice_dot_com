import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'sloor.dev - Game & Software Developer',
    short_name: 'sloor.dev',
    description: 'Full Stack and Game Developer Portfolio and Blog',
    start_url: '/',
    display: 'standalone',
    background_color: '#cdb4db',
    theme_color: '#2b1936',
    icons: [
      {
        src: '/icon.png',
        sizes: 'any',
      },
    ],
  };
}