import React from 'react';
import {useNavigate, useHistory} from "react-router-dom";
import {useState} from "react";

export default function Contact(){

    //get the navigate hook from react-router-dom
    const navigate = useNavigate();

    function submitForm(){
        navigate('/form-submitted', {
            'state':{
                'formData': formState
            }
        })
    }
    //if using react router dom v5
    //const history = useHistory();
    
    const [formState, setFormState] = useState({
        'fullName': '',
        'email': ''
    })

    const updateFormField = (e) =>{
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }
    return <React.Fragment>
        <h1>Contact page</h1>
        <div>
            <div>
                <label>Full Name:</label>
                <input type='text' 
                       name="fullName" 
                       value={formState.fullName}
                onChange={updateFormField}/>
            </div>
            <div>
                <label>Email:</label>
                <input type='text' 
                       name="email" 
                       value={formState.email}
                onChange={updateFormField}/>
            </div>
            <button onClick={submitForm}>Submit</button>
        </div>
    
    </React.Fragment>

}