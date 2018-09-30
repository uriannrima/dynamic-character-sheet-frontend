import { RouteConfig } from 'vue-router'

const CharacterSheetPage = () => import('./CharacterSheetPage.vue')

const baseRoute = {
  component: CharacterSheetPage,
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
  }, baseRoute)
]

export default routes
