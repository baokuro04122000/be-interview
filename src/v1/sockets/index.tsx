import {
  removeUser,
  pushSocketIdToArray,
  removeSocketIdFromArray
  
} from '../helpers/userSocket.helper'
import Global from '../config/Global'
const notification = require('./notifications/notification.socket')



const initAllSocket = (socket: any) => {
  console.log(Global.instance.users)
  Global.instance.users = pushSocketIdToArray(global.users, socket.payload._id, socket.id)
  
  notification(socket, global.users);
  
  console.log(global.users)
  // when a user refreshes the page or quit
  socket.on('disconnect',()=>{
    global.users  = removeSocketIdFromArray(global.users,socket.payload._id, socket.id);
    console.log(global.users)
  })
}

export default initAllSocket