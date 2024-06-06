import {createContext} from "react";
 const UserContext =  createContext();
export const ContextProvider =  ({children})=>{
    const name= 'abhay'
    return(
     <UserContext.Provider value ={{name}}>
        {children}
        </UserContext.Provider>
    )
}
export default UserContext;