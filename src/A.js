import React, { useEffect, useState } from 'react'
import Conditional from './Conditional'
import B from './B';
const UserContext=React.createContext()
const A = () => {
 const [name, setname] = useState("krishna")
let a=10;
  return (
    <div>
      
      <UserContext.Provider value={{name,setname}}>
        <Car/>
      <B/>
      </UserContext.Provider>
    </div>
  )
}
export default A
export {UserContext}
