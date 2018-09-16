// Lazy Load Components
import { Route as LoginRoute } from '@/modules/Login';
import { Route as Sandbox } from '@/modules/Sandbox';
import { Route as HomeRoute } from '@/modules/Home';
import { Route as CharacterSheetRoutes } from '@/modules/CharacterSheet';

const routes = [
  ...LoginRoute,
  ...HomeRoute,
  ...Sandbox,
  ...CharacterSheetRoutes,
  {
    path: '*',
    redirect: '/login'
  }
]

export default routes
