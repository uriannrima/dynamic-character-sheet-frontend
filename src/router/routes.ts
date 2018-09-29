const routes = [
  {
    path: '*',
    redirect: '/login'
  }
]

const routeRequire = (require as any).context(
  '@/pages/',
  true,
  /[Rr]oute.(js|ts)$/
);

routeRequire.keys().forEach((fileName: string) => {
  const routeConfig = routeRequire(fileName);
  const configuredRoutes = routeConfig.default || routeConfig.routes || routeConfig;
  if (configuredRoutes && Array.isArray(configuredRoutes)) {
    configuredRoutes.forEach(route => {
      routes.unshift(route);
    })
  }
})

export default routes
