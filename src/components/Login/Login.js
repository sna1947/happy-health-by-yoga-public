import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
// import useFirebase from '../../Hooks/useFirebase';

const Login = () => {
// const {signInUsingGoogle,signInUsingGithub} = useFirebase();
const {signInUsingGoogle,signInUsingGithub} = useAuth();
// console.log(useFirebase());
    return (
        <div>
        <h1>Please Login</h1>
        <button onClick={signInUsingGoogle}> Google Sign In</button>
       
        <button onClick={signInUsingGithub}> Github Sign In</button>
        <br />
        <Link to='/signup'>New User?</Link>
    </div>
    );
}; 

export default Login;