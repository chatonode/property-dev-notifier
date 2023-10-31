import axios, { AxiosHeaders } from 'axios'

// Local
const ingressNginxURL =
  'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local'

// Prod
// const ingressNginxURL = 'http://www.your-domain.com'

const buildSender = () => {
  // Server || Browser
  if (typeof window === 'undefined') {
    // We are on the server!
    // console.log('We are on the server!')

    return axios.create({
      baseURL: ingressNginxURL,
      headers: {
        Host: 'property-dev-notifier.com', // Fixed the issue!!!
      },
    })
  } else {
    // We are on the browser!

    return axios.create({})
  }
}

export { buildSender }
