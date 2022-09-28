import React, { useState } from 'react'
import{CREATE_PROVIDER} from '../GraphQL/Mutations'
import { useMutation } from '@apollo/client';
function Form() {
    const [provider_Name ,setProviderName] = useState("");
    const [provider_Email ,setProviderEmail] = useState("");
    const [provider_Password ,setProviderPassword] = useState("");

    const [add_provider,{error}]  = useMutation(CREATE_PROVIDER);

    const addProvider = ()=>{
        add_provider({
            variables:{
                provider:{
                    provider_Email:provider_Email,
                    provider_Name:provider_Name,
                    provider_Password:provider_Password
                
                  }
            }
        });
        if(error){
            console.log(error);
        }
    };
  return (
    <div className="input-boxes">
    <div className="input-box">
            <i className="fas fa-user"></i>
            <input type="text"
            // value={name}
            onChange={(e)=> setProviderName(e.target.value)}
             placeholder="Enter your name" required />
        </div>
        <div className="input-box">
            <i className="fas fa-envelope"></i>
            <input type="text"
            // value={email}
            onChange={(e)=> setProviderEmail(e.target.value)}
             placeholder="Enter your email" required />
        </div>
        <div className="input-box">
            <i className="fas fa-lock"></i>
            <input type="password"
            // value={password}
            onChange={(e)=> setProviderPassword(e.target.value)}
             placeholder="Enter your password" required />
        </div>
        {/* <div className="text"><a href="#" style={{color: "#191919"}}>Forgot password?</a></div> */}
        <div className="button input-box">
            <input type="button" value="Sign Up"
            onClick={addProvider}
             />
        </div>
        
    </div>
  )
}

export default Form