import { RouteConfig } from 'vue-router';

/** Default Route. */
const routes: RouteConfig[] = [];

/** Require Pages Context */
const routeRequire = require.context(
  '@/pages/',
  true,
  /[Rr]oute.(js|ts)$/
);

/** For each page */
routeRequire.keys().forEach((fileName: string) => {
  /** Get its config. */
  const routeConfig = routeRequire(fileName);
  const configuredRoutes = routeConfig.default || routeConfig.routes || routeConfig;
  if (configuredRoutes && Array.isArray(configuredRoutes)) {
    configuredRoutes.forEach(route => {
      /** Register each exported route. */
      routes.push(route);
    })
  }
})

export default routes
