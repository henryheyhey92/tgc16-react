import React from 'react';
import {useNavigate} from "react-router-dom";
import {useState} from "react";

export default function Contact(){

    //get the navigate hook from react-router-dom
    const navigate = useNavigate();

    function submitForm(){
        navigate('/form-submitted')
    }
    //if using react router dom v5
    //const history = useHistory();
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    // const [formState, setFormState] = useState({
    //     'fullname': '',
    //     'email': ''
    // })

    // const updateFormField = (e) =>{
    //     setFormState({
    //         ...formState,
    //         [e.target.name]: e.target.value
    //     })
    // }
    return <React.Fragment>
        <h1>Contact page</h1>
        <div>
            <div>
                <label>Full Name:</label>
                <input type='text' name="fullName" value={fullName}
                onChange={(event) => {
                    setFullName(event.target.value)
                }}/>
            </div>
            <div>
                <label>Email:</label>
                <input type='text' name="email" value={email}
                onChange={(event) => {
                    setEmail(event.target.value)
                }}/>
            </div>
            <button onClick={submitForm}>Submit</button>
        </div>
    
    </React.Fragment>

}