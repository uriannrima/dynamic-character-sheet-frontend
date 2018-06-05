import { RouteConfig } from 'vue-router'

const CharacterSheet = () => import('./CharacterSheet.vue')

const baseRoute = {
  component: CharacterSheet,
  meta: {
    title: 'Character',
    requiresAuth: true
  }
}

export const routes: RouteConfig[] = [
  Object.assign({
    name: 'character',
    path: '/character/:id'
  }, baseRoute),
  Object.assign({
    name: 'newCharacter',
    path: '/character'
  }, baseRoute)
]

export default routes
