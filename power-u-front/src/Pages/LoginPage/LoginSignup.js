import React from "react";
import CoverFront from "./CoverFront"
import Login from "./Login";
import Signup from "./Signup";
import "./styles.css";
export default function LoginSignup() {
    return (
        <div className="login-sign-page">
            <div className="login-sign-container">

                <input type="checkbox" id="flip" />
                <CoverFront />
                <div className="login-sign-forms">
                    <div className="login-sign-form-content">
                        <Login />
                        <Signup />

                    </div>
                </div>
            </div>
        </div>



    )



}