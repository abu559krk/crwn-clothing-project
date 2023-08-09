import { createAuthUserWithEmailAndPassword,UserDocumnetfromAuth } from '../../utils/firebase/firebase.utils';

import Forminputcomponent from '../form-input/form-input-component';
import "./sign-up-form-style.scss";
import React from 'react'
import { useState } from 'react';
import Button from '../buttons/button.component';
const defaultformfields = {
    DisplayName: '',
    Email: '',
    Password: '',
    ConfirmPassword: ''
}

function Signupformcomponent() {
    const [formFields, setformFields] = useState(defaultformfields);
    const { DisplayName, Email, Password, ConfirmPassword} = formFields;

    console.log(formFields);

    const resetFormFields = () =>{
        setformFields(defaultformfields);
    }


    const handleSubmit = async (event) =>{
        event.preventDefault();

        if(Password !== ConfirmPassword){
            alert("password does not match");
            return;
        }
        try {
            const {user}= await createAuthUserWithEmailAndPassword(Email, Password);

            await UserDocumnetfromAuth(user, {DisplayName});
            resetFormFields();

        } catch (error) {
            if(error.code === 'auth/email-already-in-use'){
                alert("con not create user, emali already in use !");
            }
            else{
                console.log('user creation error', error)
            }
        }
    }
    const handleChange = (event) =>{
        const {name, value} = event.target;
        setformFields({...formFields, [name]: value});
    }
  return (
    <div className='sign-up-container'>
        <h2>
            Don't have an account?
        </h2>
        <span>
            SignUp with your email and password !
        </span>
        <form onSubmit={handleSubmit}>
            
            <Forminputcomponent label='Display Name' type='text' required onChange={handleChange} name='DisplayName' value={DisplayName}/>

            
            <Forminputcomponent label='Enter Email' type='email' required onChange={handleChange} name='Email' value={Email}/>

           
            <Forminputcomponent label='Enter Password' type= 'password' required onChange={handleChange} name='Password' value={Password}/>

            
            <Forminputcomponent label = 'Confirm Password' type='password' required onChange={handleChange} name='ConfirmPassword' value={ConfirmPassword}/>

            <Button type='submit'>Sign Up</Button>
        </form>
    </div>
  )
}

export default Signupformcomponent