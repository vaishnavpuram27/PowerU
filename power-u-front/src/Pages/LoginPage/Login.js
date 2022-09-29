import React, { useEffect,useState,useRef } from 'react'
import {useNavigate} from 'react-router-dom'
import { LOAD_CUSTOMERS,LOAD_PROVIDERS } from '../../GraphQL/Queries';
import {useQuery,useLazyQuery} from '@apollo/client';
function Login() {
    const {error,loading,data} = useQuery(LOAD_CUSTOMERS);
    const {error:proError,loading:proLoad,data:proData} = useQuery(LOAD_PROVIDERS);

    
    const navigate  = useNavigate();
    // const [email ,setEmail] = useState("");
    const emailRef = useRef();
    const passwordRef = useRef();
    const userTypeRef = useRef();
    // var email = emailRef.current.value;
    //  var password = passwordRef.current.value;
    //  var userType = userTypeRef.current.value;
    const clickBtn =()=>{
        
        if(userTypeRef.current.value==="Admin"){
            if(emailRef.current.value==="admin" && passwordRef.current.value==="admin"){
                navigate('/admin')
            }
            else{
                alert("Invalid credentials");
            }

        }
        else if(userTypeRef.current.value==="Customer"){
            if(data){
                var products =[]                
                                 products =  data.get_all_customers;
                                 console.log(products)
                        
                            //  var arr  = [];
                             var cusflag =0;
                      
                          for(let i  = 0 ;i<products.length;i++){
                      
                             if(products[i].cust_Email===emailRef.current.value && products[i].cust_Password===passwordRef.current.value ){
                                 console.log(products[i]);
                                 alert("valid")
                                 cusflag =1;
                                 break;                               
                        
                             }                             
                       }
                       if(cusflag){
                        navigate(`/home?id=${emailRef.current.value}`)
                       }
                       else{
                        alert("error");
                       }
            }
        }
        else{
            if(proData){
                var productsPro =[]                
                                 productsPro =  proData.get_all_providers;
                                 console.log(productsPro)
                        
                            //  var arr  = [];
                             var proflag =0;
                      
                          for(let i  = 0 ;i<productsPro.length;i++){
                      
                             if(productsPro[i].provider_Email===emailRef.current.value && productsPro[i].provider_Password===passwordRef.current.value ){
                                 console.log(productsPro[i]);
            
                                 proflag =1;
                                 break;                               
                        
                             }                             
                       }
                       if(proflag){
                        navigate(`/provider?id=${emailRef.current.value}`);
                        
                       }
                       else{
                        alert("error");
                       }
            }
        }
        
    }
    

    
    
        // const fonts = ["cursive", "sans-serif", "serif", "monospace"];
        // const size = 18;
        // let captchaValue = "";
        // function generateCaptcha() {
        //     let value = btoa(Math.random() * 5);
        //     value = value.substring(0, 5 + Math.random() * 5);
        //     captchaValue = value;
        // }
        // function setCaptcha() {
        //     let html = captchaValue.split("").map((char) => {
        //         const rotate = Math.trunc(Math.random() * 30);
        //         const font = Math.trunc(Math.random() * fonts.length);
        //         return `<span
        //     style = "
        //     transform:rotate(${rotate}deg);
        //     font-family : ${fonts[font]};
        //     font-size : ${size}px
        //     "

        // >${char}</span>`;
        //     }).join("");
        //     var element = document.getElementById("preview");
        //     element.innerHTML = html;
        // }
        
        // function initCaptcha() {
        //     // console.log(fonts.length)
            
        //     var btn =document.getElementById("captcha-refresh");
        //     btn.addEventListener("click",function(){
        //         generateCaptcha();
        //         setCaptcha();
        //     });
        //     generateCaptcha();
        //     setCaptcha();
        // }
        // initCaptcha();
        // document.getElementById("input-btn").addEventListener("click", async()=>{
            
            
        //     let inputCaptchaVal = document.getElementById("captcha-form").value;
        //     console.log(inputCaptchaVal,captchaValue);
        //     if(inputCaptchaVal===captchaValue){
                
        //         // console.log(userType)
        //         var email = emailRef.current.value;
        //         var password = passwordRef.current.value;
        //         var userType = userTypeRef.current.value;
        //         if(data&&proData){
        //         if(userType ==="Customer"){
        //              var products =[]      
                             
                    
                
        //                 products =  data.get_all_customers;
        //                 console.log(products);
                
                              
                
                
        //             var arr  = [];
        //             var cusflag =0;
                
        //          for(let i  = 0 ;i<products.length;i++){
                
        //             if(products[i].cust_Email===email && products[i].cust_Password===password ){
        //                 console.log(products[i]);
        //                 alert("valid")
        //                 cusflag =1;
                        
                
        //             }                             
        //          }
        //          if(cusflag===1){
        //             navigate('/')
        //          }
        //          else{
        //             console.log("error");
        //          }
        //         }
        //         else if(userType==="Provider"){
                    
        //                 var productsPro =[]      
                                
                       
                   
        //                    productsPro =  proData.get_all_providers;
        //                    console.log(productsPro);
                   
                                 
                                    
        //                var arrPro  = [];
        //                var proflag =0;
                   
        //             for(let i  = 0 ;i<productsPro.length;i++){
                   
        //                if(productsPro[i].provider_Email===email && products[i].cust_Password===password ){
        //                    console.log(products[i]);
        //                    alert("valid")
        //                    proflag =1;
                           
                   
        //                }                             
        //             }
        //             if(proflag===1){
        //                navigate('/provider')
        //             }
        //             else{
        //                console.log("error");
        //             }
        //            }
        //         }
                 
                
                


        //     }
        //     else{
        //         alert("retry");
                
        //         navigate('/login-signup')
                
               
        //     }
        // })


    return (
        <div className="login-form">
            <div className='login-head'>
                <div className="title">Login</div>
                <div className="user-type">
                    <p className="details" style={{ marginLeft: "5px" }}>Type of user</p>

                    <select
                        className='type-dropdown'
                    //  value={userType} 
                    // onChange={e => setUserType(e.target.value)}
                    ref={userTypeRef}
                    >
                        <option>Customer</option>
                        <option>Provider</option>
                        <option>Admin</option>

                    </select>
                </div>
            </div>
            <form onSubmit={(e) => {
                e.preventDefault();
            }}>
                <div className="input-boxes">

                <div className="input-box">
                    <i className="fas fa-envelope"></i>
                    <input type="text"
                    
                    // onChange={(e)=> setEmail(e.target.value)}
                    ref={emailRef}
                     placeholder="Enter your email" required />
                </div>
                
                    <div className="input-box">
                        <i className="fas fa-lock"></i>
                        <input type="password"
                            // value={password}
                            // onChange={(e)=> setPassword(e.target.value)}
                            ref={passwordRef}
                            required
                            placeholder="Enter your password" />
                    </div>
                    <div className="captcha-box">
                        <p className="captcha-input">Enter Captcha</p>
                        <div id="preview" className="preview">

                        </div>
                        <div className="captcha-form">
                            <input type="text" id="captcha-form"
                                placeholder='Enter captcha text' />
                            <button id='captcha-refresh'>
                                <i className='fas fa-refresh'></i>
                            </button>
                        </div>
                    </div>

                    {/* <div className="text"><a href="#" style={{color: "#191919"}}>Forgot password?</a></div> */}
                    <div className="button input-box" id='input-btn'>
                        <input type="submit" value="Log In"
                        onClick={clickBtn}
                        />
                    </div>
                    <div className="text sign-up-text">Don't have an account? <label htmlFor="flip">Sigup now</label>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login