import { useState } from "react"
import initializeAuthencation from "../Firebase/firebase.initialize";
import { getAuth, signInWithPopup, GoogleAuthProvider,GithubAuthProvider, onAuthStateChanged,signOut  } from "firebase/auth";
import { useEffect } from "react";

initializeAuthencation();

const useFirebase = () =>{
const [user, setUser] = useState({});
const  [error, setError] =useState('');

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

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

// const signInUsingGithub=()=>{
//     signInWithPopup(auth, githubProvider)
//     .then(result=>{
//         const user = result.user;
//         console.log(result.user)
//         setUser(result.user)
//     })
// };
const signInUsingGithub=()=>{
    signInWithPopup(auth, githubProvider)
    .then(result=>{
        const user = result.user;
        console.log(result.user)
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
    signInUsingGithub
}

}
export default useFirebase;
