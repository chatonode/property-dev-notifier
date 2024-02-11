export const enum ERoute {
  Home = '/',
  Signup = '/signup',
  Login = '/login',
  GoodBye = '/goodbye',
  Dashboard = '/dashboard',

  About = '/about',

  CreateNotificationTemplate = '/notifications/create-a-template',
  PropertyDevelopers = '/users/property-developers',
  CreatePropertyDeveloper = '/users/property-developers/create',
  // MyProfile = '/my-profile',

  // RateLimitExceeded = '/rate-limit-exceeded',
  Unauthorized = '/unauthorized',
  InternalServerError = '/internal-server-error',
  Forbidden = '/forbidden',
  NetworkError = '/network-error',
  GenericError = '/generic-error',

  // DashboardUnauthorized = '/dashboard/unauthorized',
  // *DashboardInternalServerError = '/dashboard/internal-server-error',
  // *DashboardForbidden = '/dashboard/forbidden',
  // *DashboardNetworkError = '/dashboard/network-error',
  // *DashboardGenericError = '/dashboard/generic-error',
}

export const enum ELoginErrorParam {
  InvalidToken = 'invalid_token',
  ExpiredToken = 'expired_token',
}

export const enum EFormType {
  SIGNUP = 'signup',
  LOGIN = 'login',
}
