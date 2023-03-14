import {Server} from 'socket.io'
class GlobalSingleton {
  public static instance: GlobalSingleton;
  private io: Server
  private users: [string]

  private constructor(io: Server,users: [string]) {
    this.io = io
    this.users = users
  }

  static getInstance(io: Server, users: [string]): GlobalSingleton {
    if (!GlobalSingleton.instance) {
      GlobalSingleton.instance = new GlobalSingleton(io, users);
    }
    return GlobalSingleton.instance;
  }

  public getIo(): Server{
    return this.io
  }

  public getUsers(): [string]{
    return this.users
  }
}

export default GlobalSingleton