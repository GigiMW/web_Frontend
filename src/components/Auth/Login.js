import React from 'react'
import { Link } from 'react-router-dom'

import './AuthPage.css'
const Login = () => {
    return (
        <div className='authpage'>
           =

            <div className='authcont'>
                <img src="/images/products/image6.png"
                    alt='login' />

                <form className='authform'>
                    <h1>Login</h1>
                    <div className='formgroup'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' />
                    </div>

                    <div className='formgroup'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' />
                    </div>

                    <Link to='/Forgot'
                        className='stylenone'
                    >
                        <p>Forgot password?</p>
                    </Link>
                    <Link to='/'
                        className='stylenone'

                    >
                        <button className='btn'>Login</button>
                    </Link>
                    <h2 className='or'>OR</h2>
                    <Link to='/signup'
                        className='stylenone'
                    >
                        <button className='btn'>Signup</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Login