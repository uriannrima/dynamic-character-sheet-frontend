const CharacterSheet = () => import('./CharacterSheet');

const baseRoute = {
  component: CharacterSheet,
  meta: {
    title: 'Character',
    requiresAuth: true
  }
}

export default [
  Object.assign({
    name: 'character',
    path: '/character/:id'
  }, baseRoute),
  Object.assign({
    name: 'newCharacter',
    path: '/character'
  }, baseRoute)
];
