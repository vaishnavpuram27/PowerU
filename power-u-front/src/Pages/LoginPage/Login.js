import React from 'react'

function Login() {
  return (
    <div className="login-form">
        <div className='login-head'>
        <div className="title">Login</div>
        <div className="user-type">
                                <p className="details" style={{marginLeft:"5px"}}>Type of user</p>
                                
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
        <form  method="POST">
            <div className="input-boxes">
            
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