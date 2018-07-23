import { RouteConfig } from 'vue-router'

const CharacterSheet = () => import('./CharacterSheet.vue')
const NewSheet = () => import('./NewSheet.vue')

const baseRoute = {
  component: CharacterSheet,
  props: true,
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
  }, baseRoute),
  {
    name: 'sheet',
    path: '/sheet',
    component: NewSheet
  }
]

export default routes
