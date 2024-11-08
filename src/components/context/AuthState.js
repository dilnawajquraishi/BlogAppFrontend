import React, { useState } from 'react'
import AuthContext from './AuthContext';

const AuthState = (props) => {
  let user=JSON.parse(localStorage.getItem('userDetails'))  // userDetails key  ,getitem predefine in storage
    const [userDetails, setuserDetails] = useState({
        name:user?user.name:"",

        _id:user?user._id:"",
        login:user?true:false 
    });
    console.log(userDetails)


// filter
const [search, setsearch] = useState('');
 // for filter feature
 let handlefilter=(event)=>{
  console.log('dgudghsdvkjhgi',event.target.value)
setsearch(event.target.value)

 }

  return (
    <AuthContext.Provider value={{userDetails,setuserDetails,handlefilter,search}}>
        {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState






