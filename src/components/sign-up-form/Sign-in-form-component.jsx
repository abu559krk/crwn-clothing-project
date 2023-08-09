import { signInWithGooglePopup,UserDocumnetfromAuth,signInAuthWithEmailAndPassword } from '../../utils/firebase/firebase.utils';

import Forminputcomponent from '../form-input/form-input-component';
import "./sign-up-form/sign-up-form.scss";
import React from 'react'
import { useState } from 'react';
import Button from '../buttons/button.component';
const defaultformfields = {
    
    Email: '',
    Password: '',
   
}

function SignInformcomponent() {
    const [formFields, setformFields] = useState(defaultformfields);
    const {Email, Password, } = formFields;

    console.log(formFields);

    const resetFormFields = () =>{
        setformFields(defaultformfields);
    }


    const signInWithGoogle = async() =>{
        let {user}  = await signInWithGooglePopup();
        await UserDocumnetfromAuth(user);
   
    }


    const handleSubmit = async (event) =>{
        event.preventDefault();

        
        try {
            const response = await signInAuthWithEmailAndPassword(Email, Password)
            console.log(response);
            resetFormFields();

        } catch (error) {
            console.log(error);
        }
    }
    const handleChange = (event) =>{
        const {name, value} = event.target;
        setformFields({...formFields, [name]: value});
    }
  return (
    <div className='sign-up-container'>
        <h2>
            Already have an account?
        </h2>
        <span>
            Sign In with your email and password !
        </span>
        <form onSubmit={handleSubmit}>
            

            
            <Forminputcomponent label='Enter Email' type='email' required onChange={handleChange} name='Email' value={Email}/>

           
            <Forminputcomponent label='Enter Password' type= 'password' required onChange={handleChange} name='Password' value={Password}/>

            

            <div className='buttons-container'>
            <Button type='submit'>Sign In</Button>
            <Button buttonType={'google'} onClick = {signInWithGoogle}>Google Sign In</Button>
            </div>
        </form>
    </div>
  )
}

export default SignInformcomponent