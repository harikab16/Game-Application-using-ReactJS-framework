import React from 'react'
import { Outlet } from 'react-router-dom'
import LoginPage from './LoginPage';
import { useSelector } from 'react-redux';
export default function Login() {
//  const [isLogin,setIsLogin ]=useState(0); 
 const userData=useSelector((state)=>state.userLogin.value);
 return (
    <div>
      {
    userData.isLogin
      ?  <Outlet/>
      : <LoginPage/>
     }
      {/* <Outlet/> */}
    
    </div>
  )
}
