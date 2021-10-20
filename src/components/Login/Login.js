import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Container, Form, Row } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css'
// import useFirebase from '../../Hooks/useFirebase';

const Login = () => {
    // const {signInUsingGoogle,signInUsingGithub} = useFirebase();
    const { signInUsingGoogle, signInUsingGithub, registerUserWithEmailAndPassword,loginUserWithEmailAndPassword } = useAuth();

    // console.log(useFirebase());
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'
    // console.log('came from',location.state?.from);

    const handelGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    };

    // EMAIL AND PASSWORD SECTION=========================================
    const [name, setName] =useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);



    const toggleLogin = e => {
        // console.log(e.target.checked)
        setIsLogin(e.target.checked)
    }

    const handelNameChange = e =>{
        setName(e.target.value)
    }

    const handelEmailChange = e => {
        // console.log(e.target.value);
        setEmail(e.target.value);
    };
    const handelPasswordChange = e => {
        // console.log(e.target.value);
        setPassword(e.target.value);
    };

    const handelRegistration = (e) => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
            setError('Pls write minimum six cherecter')
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('password must 6 chreecter and minimum two upper case');
            return;
        }

        if (isLogin) {
            loginUserWithEmailAndPassword(email,password)
            history.push(redirect_uri);
          
        } else {
             registerUserWithEmailAndPassword(email,password)
             history.push(redirect_uri);
        } 
    }

    return (
        <div className='formAndLog  d-flex justify-content-center align-items-center  '>
            
            <div className='userPass-form mx-5 mb-5'>
                <form onSubmit={handelRegistration}>
                    <h2 className='text-primary'>Please {isLogin ? 'Login' : 'Register'} </h2>
                    
                    
                    {!isLogin && <div className="row mb-3">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name</label>
                       
                        <div className="col-sm-10">
                            <input onBlur={handelNameChange} type="Name" className="form-control" id="inputEmail3" required />
                        </div>
                    </div>}

                    <div className="row mb-3">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        {/* EMAIL section====================== */}
                        <div className="col-sm-10">
                            <input onBlur={handelEmailChange} type="email" className="form-control" id="inputEmail3" required />
                        </div>
                    </div>
                    {/* PASSWORD section======================== */}
                    <div className="row mb-3">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input onBlur={handelPasswordChange} type="password" className="form-control" id="inputPassword3" required />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-sm-10 offset-sm-2">
                            <div className="form-check">
                                <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                                <label className="form-check-label" htmlFor="gridCheck1">All Ready Registered ?
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-3 text-danger">{error}</div>
                    <button type="submit" className="btn btn-primary">{isLogin ? 'Login' : 'Register'}</button>
                </form>
            </div>

            <div className='google-gitHub-subBtn bg-warning mx-5 p-3 '>
                <h1>Or Login With ...</h1>
                <button className='m-2 rounded bg-info fw-bold text-danger' onClick={handelGoogleLogin}> Google Sign In</button>

                <button className='m-2 rounded bg-info fw-bold text-danger' onClick={signInUsingGithub}> Github Sign In</button>
                <br />
                {/* <Link to='/register'>New User?</Link> */}
            </div>
        </div>
    );
};

export default Login;