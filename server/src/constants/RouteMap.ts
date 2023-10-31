/**
 * All supported Express router paths
 */

enum ApiRoute {
  SIGNUP = '/api/auth/signup',
  LOGIN = '/api/auth/login',
  LOGOUT = '/api/auth/logout',
  CURRENT_USER = '/api/auth/current-user',

  NOTIFY_DEVELOPERS = '/api/notifications/send-all',

  // TODO
  GET_USERS = '/api/users/',
  POST_USER = '/api/users/new',
  GET_USER = '/api/users/:userId',
  PATCH_USER = '/api/users/:userId',
  DELETE_USER = '/api/users/:userId',
}

// type HttpMethod = 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH'

enum HttpMethod {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  PATCH = 'patch',
  DELETE = 'delete',
}

type ApiRoutePath = `/api/${string}`

type RouteConfig = {
  [key in keyof typeof ApiRoute]: {
    method: HttpMethod
    path: ApiRoutePath
  }
}

const RouteMap: RouteConfig = {
  SIGNUP: { method: HttpMethod.POST, path: ApiRoute.SIGNUP },
  LOGIN: { method: HttpMethod.POST, path: ApiRoute.LOGIN },
  LOGOUT: { method: HttpMethod.POST, path: ApiRoute.LOGOUT },
  CURRENT_USER: { method: HttpMethod.GET, path: ApiRoute.CURRENT_USER },
  NOTIFY_DEVELOPERS: {
    method: HttpMethod.POST,
    path: ApiRoute.NOTIFY_DEVELOPERS,
  },
  GET_USERS: { method: HttpMethod.GET, path: ApiRoute.GET_USERS },
  POST_USER: { method: HttpMethod.POST, path: ApiRoute.POST_USER },
  GET_USER: { method: HttpMethod.GET, path: ApiRoute.GET_USER },
  PATCH_USER: { method: HttpMethod.PATCH, path: ApiRoute.PATCH_USER },
  DELETE_USER: { method: HttpMethod.DELETE, path: ApiRoute.DELETE_USER },
} as const

export default RouteMap
