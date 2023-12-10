import { AxiosInstance } from 'axios'
import { buildServerSender } from './server/build-server-sender'
import { buildClientSender } from './client/build-client-sender'

export interface IServerSender {
  type: 'server'
}

export interface IClientSender {
  type: 'client'
}

type Sender = IServerSender | IClientSender

/**
 * INACTIVE | NOT WORKING
 * 
 * Builds a request sender for Axios based on the specified environment type.
 *
 * @param {('server' | 'client')} type - The environment type, either 'server' or 'client'.
 * @returns {AxiosInstance} - An instance of the appropriate sender for the specified environment.
 * @throws {Error} - Throws an error if an invalid type is provided.
 *
 * @typedef {Object} IServerSender
 * @property {'server'} type - The type identifier for the server sender.
 *
 * @typedef {Object} IClientSender
 * @property {'client'} type - The type identifier for the client sender.
 *
 * @typedef {IServerSender | IClientSender} Sender - Union type representing either a server or client sender.
 *
 * @template T - The type of sender (IServerSender or IClientSender).
 *
 * @example
 * const serverSender = buildSender<IServerSender>('server');
 * // Returns an instance of the server sender.
 *
 * const clientSender = buildSender<IClientSender>('client');
 * // Returns an instance of the client sender.
 */
const buildSender = <T extends Sender>(type: T['type']): AxiosInstance => {
  if (type === 'server') {
    return buildServerSender()
  } else if (type === 'client') {
    return buildClientSender()
  } else {
    throw new Error('Invalid type')
  }
}

export default buildSender
