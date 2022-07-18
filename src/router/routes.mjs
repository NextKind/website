export default [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/OrganizationView.vue')
  },
  {
    path: '/related-efforts',
    name: 'related-efforts',
    component: () => import('../views/RelatedEffortsView.vue')
  },
  {
    path: '/media-resources',
    name: 'media-resources',
    component: () => import('../views/MediaResourcesView.vue')
  }
]  
