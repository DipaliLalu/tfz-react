import { useFormik } from 'formik'
import React, { useState } from 'react'
import { signupSchema } from '../../../schemas'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css'
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";

const initialValues = {
    username: '',
    email: '',
    password: '',
    confirm_password: ''
}
export default function RegistrationForm() {
    const [passwordShown, setPasswordShown] = useState(false);
    const data=JSON.parse(localStorage.getItem('data'))||[];
    const eye = passwordShown?<IoMdEye/>:<IoMdEyeOff/>

    const togglePasswordVisiblity = () => {
      setPasswordShown(passwordShown ? false : true);
    };
    
    const notify = () => toast.success('Registration successfully');

    const { values, handleChange, errors, handleSubmit, touched } = useFormik({
        initialValues,
        validationSchema: signupSchema,
        onSubmit: (values, action) => {
            console.log(values);
            data.push(values);
            localStorage.setItem('data',JSON.stringify(data));
            action.resetForm();
            notify();
        },
    })
    return (
        <div className='form-container'>
        <form className='container d-flex flex-column gap-4' onSubmit={handleSubmit}>
            <header className='text-center'>Registration Form</header>
            <div>
            <div className='form-control'>
                <input type="text" id='username' name='username' placeholder='Username' onChange={handleChange} value={values.username} autoComplete='off' />
            </div>
                {errors.username && touched ? <p className='text-danger m-0 error'>{errors.username}</p> : null}</div><div>
            <div className='form-control'>
                <input type="text" id='email' name='email'  placeholder='Email' onChange={handleChange} value={values.email} autoComplete='off' />
            </div>
                {errors.email && touched ? <p className='text-danger m-0 error'>{errors.email}</p> : null}</div><div>
            <div className='form-control d-flex justify-content-between'>
                <input  type={passwordShown ? "text" : "password"} id='password' name='password'  placeholder='Password' onChange={handleChange} value={values.password} autoComplete='off' />
                <span onClick={togglePasswordVisiblity}>{eye}</span>{" "}
            </div>
                {errors.password && touched ? <p className='text-danger m-0 error'>{errors.password}</p> : null}</div><div>
            <div className='form-control d-flex justify-content-between'>
                <input  type={passwordShown ? "text" : "password"} id='confirm_password' name='confirm_password'  placeholder='Confirm Password' onChange={handleChange} value={values.confirm_password} autoComplete='off' />
                <span onClick={togglePasswordVisiblity}>{eye}</span>{" "}
            </div>
                {errors.confirm_password && touched ? <p className='text-danger m-0 error'>{errors.confirm_password}</p> : null}</div>
            <div className='mx-auto text-center'>
                <p className='m-0 mb-2'>Already have an Account? <a href='<Login>'>Login</a></p>
                <button type="submit" className='btn btn-light fw-semibold' >Submit</button>
                <ToastContainer />
            </div>
        </form>
        </div>
    )
}

