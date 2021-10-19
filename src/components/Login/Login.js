import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css'
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

// EMAIL AND PASSWORD SECTION=========================================
const [email, setEmail]=useState('');
const [password, setPassword]=useState('');

const handelEmailChange =e=>{
    // console.log(e.target.value);
    setEmail(e.target.value);
};
const handelPasswordChange =e=>{
    // console.log(e.target.value);
    setPassword(e.target.value);
};

const handelRegistration =(event)=>{
    console.log(email,password);
    event.preventDefault()
   
}
    return (
        <div className='formAndLog '>
            
                <div className='userPass-form mx-5 '>
                    <form onSubmit={handelRegistration}>
                        <h2 className='text-primary'>Pls Login</h2>
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                            {/* EMAIL section====================== */}
                            <div className="col-sm-10">
                                <input onBlur={handelEmailChange} type="email" className="form-control" id="inputEmail3" required/>
                            </div>
                        </div>
                        {/* PASSWORD section======================== */}
                        <div className="row mb-3">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input onBlur={handelPasswordChange} type="password" className="form-control" id="inputPassword3" required/>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-sm-10 offset-sm-2">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="gridCheck1" />
                                    <label className="form-check-label" htmlFor="gridCheck1">
                                        Example checkbox
                                    </label>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Log in</button>
                    </form>
                </div>

                <div className='google-gitHub-subBtn bg-warning mx-5 '>
                    <h1>Please Login</h1>
                    <button onClick={handelGoogleLogin}> Google Sign In</button>

                    <button onClick={signInUsingGithub}> Github Sign In</button>
                    <br />
                    <Link to='/register'>New User?</Link>
                </div>
        </div>
    );
}; 

export default Login;