import { getRouteRegex } from 'next/dist/shared/lib/router/utils'

export default function routes(pagesManifest) {
  const routes = {}

  for (let as in pagesManifest) {
    const component = pagesManifest[as]
    const route = getRouteRegex(as).re.source

    routes[route] = {
      component,
      as,
    }
  }

  return routes
}
