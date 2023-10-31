import axios, { AxiosHeaders } from 'axios'

const ingressNginxURL =
  'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local'

const buildClient = ({ }) => {
  // Server || Browser
  if (typeof window === 'undefined') {
    // We are on the server!

    return axios.create({
      baseURL: ingressNginxURL,
    //   headers: req.headers,
    })
  } else {
    // We are on the browser!

    return axios.create({})
  }
}

export { buildClient }
