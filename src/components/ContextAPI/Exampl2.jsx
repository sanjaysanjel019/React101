import {useContext} from 'react'
import { UserContext } from './Example1';


const Exampl2 = () => {
    const {user,updateUser}=useContext(UserContext);

  return (
    <div>
        <h1>User Profile</h1>
        <p>Name : {user.name}</p>

        <button onClick={()=>updateUser('Homer')}>Change Name</button>
    </div>
  )
}

export default Exampl2