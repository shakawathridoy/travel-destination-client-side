import { useEffect, useState } from "react";
import initializeAuthentication from "./../Firebase/firebase.init"
import { getAuth, GoogleAuthProvider, signOut, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, updateProfile} from 'firebase/auth'

initializeAuthentication()

const useFirebase = () => {

    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth , (user)=> {
             if(user){
                 setUser(user)
             } else{
                 setUser({})
             }
             setIsLoading(false)
        })
         return ()=> unsubscribe()
   },[])
    


    const singInWithGoogle = () => {
      return  signInWithPopup(auth, googleProvider)
  
}

const createAccountWithGoogle = ( email, password) => {
   return createUserWithEmailAndPassword(auth, email, password)
  
}

const singInWithEmailPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
}

const updateName = (name) => {
    updateProfile(auth.currentUser, {
        displayName: name
      }).then(() => {
        const newUser={...user, displayName: name} 
       setUser(newUser)
        
        
      }).catch((error) => {
        
      });
    }

    
const logOut=()=> {
   signOut(auth).then(() => {
       setUser({})
     }).catch((error) => {
       
     });
}


    return {
        user,
        setUser,
        singInWithGoogle,
        createAccountWithGoogle,
        singInWithEmailPassword,
        isLoading,
        setIsLoading,
        logOut,
        updateName
    }
};

export default useFirebase;