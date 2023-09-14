import React, { useState } from 'react'
import './pstyle.scss';
import { useDispatch } from 'react-redux';
import { login } from '../features/Session';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
export default function LoginPage() {
  const notify = () => toast("Wow so easy!");
  const [currentUser,setCurrentUser]=useState([{}]);
  const [IncorrectDetails,setIncorrectDetails]=useState({status:"Start the Game "});
    const dispatch=useDispatch();
    function Register_P()
    {
      var name=document.getElementById('Rusername').value;
      var password=document.getElementById('Rpassword').value;
      var doj=document.getElementById('doj').value;
      var team=document.getElementById('Team').value;
      var user={
          name:name,
          PASSWORD:password,
          address:team,
          DOJ:doj
      };
    axios.post(`http://localhost:3001/add/user`, { user })
    .then(res => {
      // console.log(res);
      console.log(res.data);
    })
    }
    function SubmitHandler(e)
    {
        e.preventDefault();
        var username=document.getElementById('username').value;
        var password=document.getElementById('password').value;
        if(username==='' || password==='')
        {
          setIncorrectDetails({status:"Please Provide Details.."});
          return;
        }
      fetch(`http://localhost:3001/login/${username}/${password}`).then((response) => response.json())
        .then((data) =>{ 
          setCurrentUser(data) ; 
          if(data.length===0)
          {
            console.log("Invalid Credentails ...");
            // alert("Inavlid Data...");
            setIncorrectDetails({status:"Invalid Data"})
            setTimeout(()=>
            {
              setIncorrectDetails({status:"Try Again "})
            },2000);
          }
          else
          {
            console.log("Valid Credentails ...");
            document.getElementById('logout-btn').style.display="block";
            dispatch(login({id:2,name:username,password:password,team:data[0].address,doj:"28/02/2021",isLogin:1}))
          }
        });  
        
    }

    function register()
    {
      console.log("Called");
      document.getElementById('register-form').style.display='block';
      document.getElementById('login-form').style.display='none';
    }
    function Login_p()
    {
      console.log("Called");
      document.getElementById('register-form').style.display='none';
      document.getElementById('login-form').style.display='block';
    }
  return (
    <div className='LoginPage' >
      <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>
        <div class="background">
            <div class="shape"></div>
            <div class="shape"></div>
        </div>
    <form id='login-form'>
        <h3
        className={IncorrectDetails.status}
        >{IncorrectDetails.status}</h3>

        <label for="username">Enter Player Name :</label>
        <input type="text" placeholder="Username"  required id="username" />
       

        <label for="password">Enter Password :</label>
        <input type="password" placeholder="Password" required id="password" />

        <button onClick={SubmitHandler}  class="button_slide slide_left">Lets Play</button>
     
     
        
        <div class="social">
          <div class="go"><i class="fab fa-google"></i>  Google</div>
          <div class="fb"><i class="fab fa-facebook"></i>  Facebook</div>
          <div class="register" onClick={register}>  Register</div>
        </div>
    </form>

    {/* Register Form Starts here.......... */}
    <form id='register-form' style={{display:"none"}}>
        <h3>Register to Play</h3>

      
        <input type="text" placeholder="Email or Phone" id="Rusername" />
       

        <input type="password" placeholder="Password" id="Rpassword" />

       
        <input type="text" placeholder="Team Name" id="Team" />

        
        <input type="date" placeholder="Date of joining" id="doj" />
        <button onClick={Register_P}  class="button_slide slide_left">
            Register
          </button>
     
     
        
        <div class="social">
          <div class="go"><i class="fab fa-google"></i>  Google</div>
          <div class="fb"><i class="fab fa-facebook"></i>  Facebook</div>
          <div class="register" onClick={Login_p}>  Login</div>
        </div>
    </form>

   
    </div>
  )
}
