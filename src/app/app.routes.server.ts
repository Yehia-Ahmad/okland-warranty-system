import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  // Public route — can be safely prerendered
  {
    path: 'login',
    renderMode: RenderMode.Prerender,
  },

  // Home and other authenticated routes — render dynamically
  {
    path: 'home',
    renderMode: RenderMode.Server,
  },
  {
    path: 'admins',
    renderMode: RenderMode.Server,
  },
  {
    path: 'categories/:id',
    renderMode: RenderMode.Server,
  },
  {
    path: 'products/edit/:id',
    renderMode: RenderMode.Server,
  },
  {
    path: 'warranties',
    renderMode: RenderMode.Server,
  },
  {
    path: '**',
    renderMode: RenderMode.Server
  }
];
