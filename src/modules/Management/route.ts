const Management = () => import('./Management.vue')
const AbilityScoresManager = () => import('./AbilityScoresManager.vue');

const route = {
  component: Management,
  name: 'management',
  path: '/management',
  meta: {
    title: 'Management',
    requiresAuth: true
  },
  children: [
    {
      path: 'abilityScores',
      component: AbilityScoresManager
    },
    {
      path: 'abilityScores/:id',
      component: AbilityScoresManager,
      props: true
    }
  ]
}
export default route
