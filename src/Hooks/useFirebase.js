import { useState } from "react"
import initializeAuthencation from "../Firebase/firebase.initialize";
import { getAuth, signInWithPopup, GoogleAuthProvider,GithubAuthProvider, onAuthStateChanged,signOut,  createUserWithEmailAndPassword ,signInWithEmailAndPassword  } from "firebase/auth";
import { useEffect } from "react";


initializeAuthencation();

const useFirebase = () =>{
const [user, setUser] = useState({});
const  [error, setError] =useState('');



const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
// signIn Using Google =====================================================
const auth = getAuth();
const signInUsingGoogle =()=>{
  return  signInWithPopup(auth, googleProvider)
    // .then(result=>{
    //     const user = result.user;
    //     console.log(result.user)
    //     setUser(result.user)
    // })
    // .catch(error=>{
    //     setError(error.message);
    // })
};

// signIn Using Email And Password===================================

 const registerUserWithEmailAndPassword=(email, password)=>{
    createUserWithEmailAndPassword(auth, email, password)
    .then(result=>{
        const user = result.user;
        console.log(result)
        setUser(result.user)
        setError('');
        
    })
    .catch(error=>{
            setError(error.message);
        })
      
  };

//   login function start 
const loginUserWithEmailAndPassword = (email, password) => {
    const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
.then(result=>{
    setUser(result.user)
    setError('');
   
})
  .catch((error) => {
    setError(error.message);
  });
}




// signIn Using Github========================================================
const signInUsingGithub=()=>{
    signInWithPopup(auth, githubProvider)
    .then(result=>{
        setUser(result.user)
    })
};

//**log out section */
const logOut =()=>{
    signOut(auth) 
    .then(()=>{
        setUser({})
    })
}

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log('inside state change', user);
                setUser(user);
            }
        })
    }, [])
    
return{
    user,
    error,
    logOut,
    signInUsingGoogle,
    signInUsingGithub,
    registerUserWithEmailAndPassword,
    loginUserWithEmailAndPassword
}

}
export default useFirebase;
