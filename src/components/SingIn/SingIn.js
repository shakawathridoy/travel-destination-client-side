import { signInWithEmailAndPassword } from '@firebase/auth';
import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';


import './SingIn.css'

const SingIn = () => {
    
  const [error, setError] = useState("")
    const {singInWithGoogle, setUser ,  singInWithEmailPassword, setIsLoading} = useAuth();
    
    
    
    const history = useHistory()
    const location = useLocation()
    
    const url = location.state?.from || "/home"

    const [email , setEmail]= useState("")
    const [password , setPassword] = useState("")


 
    const handleGetEmail = (e) =>{
        setEmail(e.target.value);
      }
      
      const handleGetPassword = (e)=> {
          setPassword(e.target.value);
      }


    const handleLoginWithEmailPassword = (e) => {
        e.preventDefault()
        if(password.length < 8){
          setError('Password must be at least 8 caracters')
          return;
        }
        singInWithEmailPassword(email, password)
        .then((res) => {
            setIsLoading(true)
            setUser(res.user);
            history.push(url);
         
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          })
          .finally(() => {
            setIsLoading(false)
          })
        
    }



  

    const handleGoogleLogin = () => {
        
        singInWithGoogle()
        .then((res)=> 
        {
            setIsLoading(true)
            setUser(res.user)
            history.push(url)
        }
        )
        .catch((err)=> console.log(err))
        .finally(() => {
            setIsLoading(false)
          })
    }

    return (
        <div >
           <div className="text-cneter singIn-body bb-5">
           <div  className="singIn-head text-center pb-3">
            <br /><br /><br />
                <h1>Sing In.</h1>
                <h5>Sign in to your Trip.com account below.</h5>
            </div>
            <div className="singIn-input text-center mt-5">
               <form onSubmit={handleLoginWithEmailPassword}>
               <h6 style={{marginRight: '350px'}}>Email</h6>
                <input onBlur={handleGetEmail} type="email" placeholder="example@gmail.com" />
                <br />
                <h6 style={{marginRight: '320px'}}>Password</h6>
                <input onBlur={handleGetPassword} type="password" placeholder="***********" />
                <br />
                <small className="text-danger">{error}</small>
                <br /><br />
                   <small>By clicking "Continue", you are agreeing to the Trip.com Terms of Use, Privacy Policy and Telehealth Consent Policy.</small><br /><br />
                   <input className="button-click" type="submit" value="Continue" />
               </form>
               <br /><br />
               <div>
                    <br />
                   <button onClick={handleGoogleLogin} className=" button">Sing up with Google</button>
                   <br />
                   <p>----------------</p>
                   <br />
                <p>New to Trip.com? <Link to="/singup">Create an Account.</Link></p>
               </div>
            </div>
           </div>
        </div>
    );
};

export default SingIn;