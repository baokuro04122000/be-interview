
// Get current user
export const getCurrentUser = (socketId: string, users:[string]) => users.find(user => user === socketId);
// delete a user
const removeUser = (socketId: string, users: [string])=> {
  const currentSocket = users.filter((user) => socketId !== user)
  return {
    ...users,
  }
}

export const pushSocketIdToArray = (clients,userId,socketId) => {
  if (clients[userId]) {
    clients[userId].push(socketId);
  } else {
    clients[userId] = [socketId];
  }
  return clients;
};

export const emitNotifyToArray = (clients,userId,socket,eventName,data) => {
  if (clients[userId]) {
    clients[userId].forEach(socketId => {
      socket.connected[socketId].emit(eventName, data);
    })
  }
};

export const removeSocketIdFromArray = (clients , userId , socket) => {
  if(clients[userId]){
    clients[userId] = clients[userId].filter(socketId=>socketId !== socket
      );
    if (clients[userId].length) {
      delete clients[userId];
    }
  }
    return clients;
};


