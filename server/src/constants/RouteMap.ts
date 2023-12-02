/**
 * All supported Express router paths
 */

enum ApiRoute {
  SIGNUP = '/api/auth/signup',
  LOGIN = '/api/auth/login',
  LOGOUT = '/api/auth/logout',
  CURRENT_USER = '/api/auth/current-user',

  CREATE_PROPERTY_DEVELOPER = '/api/users/property-developers',
  LIST_PROPERTY_DEVELOPERS = '/api/users/property-developers',
  GET_PROPERTY_DEVELOPER = '/api/users/property-developers/:propertyDeveloperId',
  UPDATE_PROPERTY_DEVELOPER = '/api/users/property-developers/:propertyDeveloperId',
  DELETE_PROPERTY_DEVELOPER = '/api/users/property-developers/:propertyDeveloperId',
  NOTIFY_PROPERTY_DEVELOPERS = '/api/users/property-developers/notifications',
}

// type HttpMethod = 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH'

enum HttpMethod {
  GET = 'get',
  POST = 'post',
  PUT = 'put', // Update Entire Resource
  PATCH = 'patch', // Update Partial Resource
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

  CREATE_PROPERTY_DEVELOPER: {
    method: HttpMethod.POST,
    path: ApiRoute.CREATE_PROPERTY_DEVELOPER,
  },
  LIST_PROPERTY_DEVELOPERS: {
    method: HttpMethod.GET,
    path: ApiRoute.LIST_PROPERTY_DEVELOPERS,
  },
  GET_PROPERTY_DEVELOPER: {
    method: HttpMethod.GET,
    path: ApiRoute.GET_PROPERTY_DEVELOPER,
  },
  UPDATE_PROPERTY_DEVELOPER: {
    method: HttpMethod.PATCH,
    path: ApiRoute.UPDATE_PROPERTY_DEVELOPER,
  },
  DELETE_PROPERTY_DEVELOPER: {
    method: HttpMethod.DELETE,
    path: ApiRoute.DELETE_PROPERTY_DEVELOPER,
  },
  NOTIFY_PROPERTY_DEVELOPERS: {
    method: HttpMethod.POST,
    path: ApiRoute.NOTIFY_PROPERTY_DEVELOPERS,
  },
} as const

export default RouteMap
