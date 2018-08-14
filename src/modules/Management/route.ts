const Management = () => import('./Management.vue')

const route = {
  component: Management,
  name: 'management',
  path: '/management',
  meta: {
    title: 'Management',
    requiresAuth: true
  }
}
export default route
