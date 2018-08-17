// Lazy Load Components
import { Route as LoginRoute } from '@/modules/Login';
import { Route as HomeRoute } from '@/modules/Home';
import { Route as CharacterSheetRoutes } from '@/modules/CharacterSheet';
import { Route as ManagementRoute } from '@/modules/Management';

const routes = [
  ...LoginRoute,
  ...HomeRoute,
  ...CharacterSheetRoutes,
  ManagementRoute,
  {
    path: '*',
    redirect: '/login'
  }
]

export default routes
