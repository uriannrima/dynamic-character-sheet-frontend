// Lazy Load Components
import { Route as LoginRoute } from 'modules/Login';
import { Route as HomeRoute } from 'modules/Home';
import { Route as CharacterSheetRoutes } from 'modules/CharacterSheet';

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
