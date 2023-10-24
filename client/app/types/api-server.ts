enum EVersion {
    v0 = 'v0',
    v1 = 'v1'
}

enum EAPI_SERVER_ENDPOINTS {
    SIGNUP = `/api/server/${EVersion.v1}/signup`,
    LOGIN = `/api/server/${EVersion.v1}/login`,
    LOGOUT = `/api/server/${EVersion.v1}/logout`,
}

// Type alternative: Discriminated unions a.k.a algebraic data types
type TAPI_SERVER_ENDPOINTS =
    | { "SIGNUP": `/api/server/${EVersion.v1}/signup`, }
    | { "LOGIN": `/api/server/${EVersion.v1}/login` }
    | { "LOGOUT": `/api/server/${EVersion.v1}/logout` }

type TMY_API_ENDPOINT_KEYS = keyof typeof EAPI_SERVER_ENDPOINTS
type TMY_API_ENDPOINT_VALUES = typeof EAPI_SERVER_ENDPOINTS[TMY_API_ENDPOINT_KEYS]

const mySignupEndpointKey: TMY_API_ENDPOINT_KEYS = "SIGNUP"
const myLogoutEndpointValue: TMY_API_ENDPOINT_VALUES = EAPI_SERVER_ENDPOINTS["LOGOUT"]
