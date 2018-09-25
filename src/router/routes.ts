// Lazy Load Components
import { Route as LoginRoute } from '@/pages/Login';
import { Route as HomeRoute } from '@/pages/Home';
import { Route as CharacterSheetRoutes } from '@/pages/CharacterSheet';
import { Route as SandboxRoute } from '@/pages/Sandbox';

const routes = [
  ...LoginRoute,
  ...HomeRoute,
  ...CharacterSheetRoutes,
  ...SandboxRoute,
  {
    path: '*',
    redirect: '/login'
  }
]

export default routes
