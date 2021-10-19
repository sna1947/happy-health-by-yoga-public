import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {
    return (
        <div className='register container mb-5 bg-light p-3 '>
        
            <form className='form container'>
                <h2 className='text-primary'>Pls Register</h2>

           {/* Name section====================== */}
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3" required />
                    </div>
                </div>

                <div className="row mb-3">

                    {/* EMAIL section====================== */}
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3" required />
                    </div>
                </div>
                {/* PASSWORD section======================== */}
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword3" required />
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
                <button type="submit" className="btn btn-primary">Register</button>
            </form>

        <Link  to='/login'>Already Register ? </Link>
    </div>
    );
};

export default Register;