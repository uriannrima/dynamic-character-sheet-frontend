// Lazy Load Components
import { Route as LoginRoute } from '../sections/Login'
import { Route as HomeRoute } from '../sections/Home'
import { Route as CharacterSheetRoutes } from '../sections/CharacterSheet'

const routes = [
  ...LoginRoute,
  ...HomeRoute,
  ...CharacterSheetRoutes,
  {
    path: '*',
    redirect: '/login'
  }
]

export default routes
