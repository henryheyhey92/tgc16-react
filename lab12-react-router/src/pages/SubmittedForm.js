import React from 'react'
import {useNavigate, useLocation} from "react-router-dom";

export default function SubmittedForm() {

    const location = useLocation();
    let fullName = location.state.formData.fullName;
    let email = location.state.formData.email;

    return <React.Fragment>
        <h1> Feedback received</h1>
        <p>Your name: {fullName}</p>
        <p>Your email: {email}</p>
        <p>
            Thank you for contacting us. We will forward your feedback
        </p>
    </React.Fragment>
}