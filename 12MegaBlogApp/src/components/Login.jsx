import React, {useState} from 'react'
import {useNavigate, Link, useActionData} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {login as authLogin} from '../store/authSlice'
import {useForm} from 'react-hook-form'
import {Button, Input, Logo} from './index'
import authService from '../appwrite/auth'

/**
* @author
* @function Login
**/

function Login () {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [register, handleSubmit] = useForm();
    const [error, setError] = useState(null);

    const login = async (data) => {
       setError("")
    
       try {
         const session =  await authService.login((data));
         if(session){
            const userData = await authService.getCurrentUser();
            if(userData) dispatch(authLogin(userData));
            navigate('/');

         }
       } catch (error) {
        setError(error.message || "Something went wrong, please try again later.");
       }
    
    }

  return(
 

    <div className='flex items-center justify-center w-full'
    >
        <div className={`mx-au w-full max-w-lg bg-gray-100
            rounded-xl p-10 border border-black/10`}>
              <div className='mb-2 flex justify-center'>
                <span className='inline-block w-full mx-w-[100px]'>
                    <Logo width = "100%" />
                </span>
              </div>
            <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        
        <form onSubmit={handleSubmit(login)} 
        className='mt-8'>
            <div className='space-y-5'>
                <input 
                label="Email: "
                placeholder='Enter your email'
                type="email" 
                {...register.register("email", {
                    required: true,
                    validate: {
                         matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }
                })}
                
                />

                <input  
                label="Password: "
                placeholder='Enter your password'
                type="password" 
                {...register.register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    validate: {
                        matchPatern: (value) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,20}$/.test(value) ||
                        "Password must be between 6 and 20 characters and contain at least one uppercase letter, one lowercase letter, and one number.",
                    }
                })}
                />
                <Button type="submit" className='w-full'>Sign in</Button>
            </div>
        </form>
        
        
        </div>
    </div>
   )
  }


  export default Login