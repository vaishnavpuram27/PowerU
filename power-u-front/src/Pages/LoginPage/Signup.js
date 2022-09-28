import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import{CREATE_CUSTOMER} from '../../GraphQL/Mutations'
import { useMutation } from '@apollo/client';

export default function Signup() {
    let navigate = useNavigate();
    const [cust_Name ,setCusName] = useState("");
    const [cust_Email ,setCusEmail] = useState("");
    const [cust_Password ,setCusPassword] = useState("");

    const [add_customer,{error}]  = useMutation(CREATE_CUSTOMER);

    const addProvider = ()=>{
        if(cust_Password.length>=8){
        add_customer({
            variables:{
                
                    customer:{
                      cust_Email:cust_Email,
                      cust_Name:cust_Name,
                      cust_Password: cust_Password
                    }
                
            }
        });
        alert("User Added, Now redirecting to login");
        navigate("/")
    }
    else{
        alert("Password should contain more than 8 characters");
    }

        if(error){
            console.log(error);
        }
    };
    
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
                    onChange={(e)=> setCusName(e.target.value)}
                     placeholder="Enter your name" required />
                </div>
                <div className="input-box">
                    <i className="fas fa-envelope"></i>
                    <input type="text"
                    // value={email}
                    onChange={(e)=> setCusEmail(e.target.value)}
                     placeholder="Enter your email" required />
                </div>
                <div className="input-box">
                    <i className="fas fa-lock"></i>
                    <input type="password"
                    // value={password}
                    onChange={(e)=> setCusPassword(e.target.value)}
                     placeholder="Enter your password" required />
                </div>
                {/* <div className="text"><a href="#" style={{color: "#191919"}}>Forgot password?</a></div> */}
                <div className="button input-box">
                    <input type="button" value="Sign Up"
                    onClick={addProvider}
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