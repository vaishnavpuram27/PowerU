import React from "react";
// import { useNavigate } from "react-router-dom";


export default function Signup() {
    // let navigate = useNavigate();
    return (
        <div className="signup-form">
            <div className="title">Signup</div>

            <div className="sign-up-btn-div">
                {/* <form onSubmit={()=>{ navigate('/signup-pro')}}>
                    <div className="button input-box">
                        <input type="submit" value="I am a Professional" />
                    </div>
                </form>

                <form onSubmit={()=>{ navigate('/signup-customer')}}>
                    <div className="button input-box">
                        <input type="submit" value="I am a Customer" />
                    </div>
                </form> */}
                <form  method="POST">
            <div className="input-boxes">
            <div className="input-box">
                    <i className="fas fa-user"></i>
                    <input type="text"
                    // value={name}
                    // onChange={(e)=> setName(e.target.value)}
                     placeholder="Enter your name" required />
                </div>
                <div className="input-box">
                    <i className="fas fa-envelope"></i>
                    <input type="text"
                    // value={email}
                    // onChange={(e)=> setEmail(e.target.value)}
                     placeholder="Enter your email" required />
                </div>
                <div className="input-box">
                    <i className="fas fa-lock"></i>
                    <input type="password"
                    // value={password}
                    // onChange={(e)=> setPassword(e.target.value)}
                     placeholder="Enter your password" required />
                </div>
                {/* <div className="text"><a href="#" style={{color: "#191919"}}>Forgot password?</a></div> */}
                <div className="button input-box">
                    <input type="submit" value="Sign Up"
                    // onClick={loginUser}
                     />
                </div>
                
            </div>
        </form>
            </div>
            <div className="text sign-up-text">Already have an account? <label htmlFor="flip">Login now</label>
            </div>
        </div>


    )
}