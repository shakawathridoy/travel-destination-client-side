import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './SingUp.css';

const SingUp = () => {

    const {singInWithGoogle, createAccountWithGoogle,  setUser, setIsLoading, updateName} = useAuth();

    const history = useHistory()
    const location = useLocation()

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("")

    const handleGetName = (e) => {
        
        setName(e.target.value)
    }
    const handleRegister = (e) => {
        e.preventDefault()
        if(password.length < 8){
            setError('Password must be at least 8 caracters')
            return;
          }
        createAccountWithGoogle(email, password)
        .then((res) => {
            setIsLoading(true)
            updateName(name)
            setUser(res.user);
            history.push(url);
        
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            
          })
          .finally(() => {
            setIsLoading(false)
          })
    }
const handleGetEmail = (e) => {
    
    setEmail(e.target.value)
}
const handleGetPassword = (e) => {
    
    setPassword(e.target.value)
}




    const url = location.state?.from || "/home"

    


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
        <div>
            <div className="text-cneter singUp-body bb-5">
           <div  className="singIn-head text-center pb-3">
            <br /><br /><br />
                <h1>Create profile.</h1>
                <h6>Become a member with a 30-day free trial.</h6>
            </div>
            <div className="singIn-input text-center mt-5">
               <form onSubmit={handleRegister} >
               <h6 style={{marginRight: '350px'}}>Name</h6>
                <input onBlur={handleGetName} type="text" placeholder="write your name" />
                <br />
               <h6 style={{marginRight: '350px'}}>Email</h6>
                <input onBlur={handleGetEmail} type="email" placeholder="example@gmail.com" />
                <br />
                <h6 style={{marginRight: '320px'}}>Password</h6>
                <input onBlur={handleGetPassword} type="password" placeholder="***********" />
               <br />
               <small className="text-danger">{error}</small>
               <br />
                   <small>By clicking "Continue", you are agreeing to the Trip.com Terms of Use, Privacy Policy and Telehealth Consent Policy.</small><br /><br />
                   <input className=" button-click " type="submit" value="Continue" />
               </form>
               <div>
                   <p>----------------</p>
                   <button onClick={handleGoogleLogin} className=" button">Sing up with Google</button>
                   <br /><br />
                <p>Already have an account?  <Link to="/singin">Sing In</Link></p>
               </div>
            </div>
           </div>
        </div>
    );
};

export default SingUp;