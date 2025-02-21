import { useState } from "react"

const Profile = () => {

 const [userProfile,setUserProfile] = useState([
    {
        id:2,
        name : "Lokandhey",
        age :23
    },
    {
        id:5,
        name : "Rahul Kulkarni",
        age :22
    },
    {
        id:8,
        name : "Mohini Nagar",
        age :20
    }
 ]);

 const [inputValue,setInputValue]= useState("");

 const handleProfileSubmit = (e) => {
    console.log(e);
    const newProfileInfo = {
        id:userProfile.length+1,
        name:inputValue
    }

    setUserProfile([...userProfile,newProfileInfo]);
    setInputValue('');
 }

 const handleInputChange = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
 }


  return (
    <div>
        <ul>
            {
                userProfile.map((m)=>(
                    <>
                    <li key={Math.random}> Name : {m.name} </li>
                    <li key={Math.random+1}>Age : {m.age}</li>
                    </>
                 
                ))
            }
        </ul>
        <form onSubmit={handleProfileSubmit}>
            <input type="text" onChange={handleInputChange} value={inputValue}></input>
            <button type="submit">Add name</button>
        </form>
    </div>
  )
}

export default Profile