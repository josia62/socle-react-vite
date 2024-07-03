import {io, Socket} from 'socket.io-client';
import config from '../../data/constants/config';
const socketEvents = {
  connect: 'connect',
  connectError: 'connect_error',
};

class SocketST {
  private static socket: Socket;
  /**
   * @summary Connecte l'application front au serveur SocketST.socket
   * @returns {Promise}
   */
  connectToServer = (token: string): Promise<Socket> =>
    new Promise(async (resolve, reject) => {
      if (SocketST.socket && SocketST.socket.connected) {
        resolve(SocketST.socket);
        return;
      }
      if (token) { 
        SocketST.socket = io(`${config.baseUrl.replace(/\/api$/, '')}`, {query: {token}});
        SocketST.socket.on(socketEvents.connect, () => {
          resolve(SocketST.socket);
        });
        SocketST.socket.on(socketEvents.connectError, () =>
          reject({message: 'Impossible de se connecter au serveur'}),
        );
      } else {
        reject({message: "Veuillez d'abord vous authentifier"});
      }
    });

  disConnectToServer = (): Promise<Socket> =>
    new Promise(async (resolve, reject) => {
      SocketST.socket = io(config.baseUrl);
      SocketST.socket.disconnect();
      return null;
    });
}

export const socketST = new SocketST();
