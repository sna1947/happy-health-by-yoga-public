import React from 'react';
import { Link,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
// import useFirebase from '../../Hooks/useFirebase';

const Login = () => {
// const {signInUsingGoogle,signInUsingGithub} = useFirebase();
const {signInUsingGoogle,signInUsingGithub} = useAuth();
// console.log(useFirebase());
const location = useLocation();
const history = useHistory();
const redirect_uri = location.state?.from || '/home'
// console.log('came from',location.state?.from);
const handelGoogleLogin =()=>{
    signInUsingGoogle()
    .then(result=>{
history.push(redirect_uri);
    })
};
    return (
        <div>
        <h1>Please Login</h1>
        <button onClick={handelGoogleLogin}> Google Sign In</button>
       
        <button onClick={signInUsingGithub}> Github Sign In</button>
        <br />
        <Link to='/signup'>New User?</Link>
    </div>
    );
}; 

export default Login;