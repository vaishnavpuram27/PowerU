import React, { useEffect } from 'react'

function Login() {
    useEffect(function () {
    
        const fonts = ["cursive", "sans-serif", "serif", "monospace"];
        let captchaValue = "";
        function generateCaptcha() {
            let value = btoa(Math.random() * 5);
            value = value.substring(0, 5 + Math.random() * 5);
            captchaValue = value;
        }
        function setCaptcha() {
            let html = captchaValue.split("").map((char) => {
                const rotate = Math.trunc(Math.random() * 30);
                const font = Math.trunc(Math.random() * fonts.length);
                return `<span
            style = "
            transform:rotate(${rotate}deg);
            font-family : ${fonts[font]}"

        >${char}</span>`;
            }).join("");
            var element = document.getElementById("preview");
            element.innerHTML = html;
        }
        
        function initCaptcha() {
            console.log(fonts.length)
            
            var btn =document.getElementById("captcha-refresh");
            btn.addEventListener("click",function(){
                generateCaptcha();
                setCaptcha();
            });
            generateCaptcha();
            setCaptcha();
        }
        initCaptcha();
        document.getElementById("input-btn").addEventListener("click",()=>{
            let inputCaptchaVal = document.getElementById("captcha-form").value;
            if(inputCaptchaVal===captchaValue){
                alert("captcha sucss");
            }
            else{
                alert("retry")
            }
        })
    }, []);

    return (
        <div className="login-form">
            <div className='login-head'>
                <div className="title">Login</div>
                <div className="user-type">
                    <p className="details" style={{ marginLeft: "5px" }}>Type of user</p>

                    <select
                        className='type-dropdown'
                    //  value={userType} 
                    // onChange={e => setGender(e.target.value)}
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
                            // value={email}
                            // onChange={(e)=> setEmail(e.target.value)}
                            placeholder="Enter your email" />
                    </div>
                    <div className="input-box">
                        <i className="fas fa-lock"></i>
                        <input type="password"
                            // value={password}
                            // onChange={(e)=> setPassword(e.target.value)}
                            placeholder="Enter your password" />
                    </div>
                    <div className="captcha-box">
                        <p className="captcha-input">Enter Captcha</p>
                        <div id="preview" className="preview">

                        </div>
                        <div classname="captcha-form">
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
                        // onClick={loginUser}
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