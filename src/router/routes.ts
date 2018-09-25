// Lazy Load Components
import { Route as LoginRoute } from '@/pages/Login';
import { Route as HomeRoute } from '@/pages/Home';
import { Route as CharacterSheetRoutes } from '@/pages/CharacterSheet';

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
