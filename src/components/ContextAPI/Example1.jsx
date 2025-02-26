import {  createContext, useState } from "react";


const UserContext = createContext();


const Example1 = ({children}) => {
  const [user, setUser] = useState({name: "Marcus Aurelius"});
  const updateUser = (newName) => {
    setUser({name: newName});
  };

  return (
    <UserContext.Provider value={{user,updateUser}}>
      {children}
    </UserContext.Provider>
  )
}

export {UserContext,Example1};