import React from 'react'
import "./Login.css"
const Login = () => {
  return (
    <>
    
       <section className="bg_img">
        <h1 class="bg_header">
          Welcome!
          <p>Use these awesome forms to login or create new account in your project for free.
</p>
        </h1>
        <div className="card">
          <h4 id='card_header'>
              Register with
          </h4>
            <div id="card_Fname" placeholder='Enter your Full Name'>

            </div>
            <h4 id='or'>
              or
            </h4>
          <div className="card-details-section">
            <div className = "name dets">
              <label htmlFor="#name">Name</label>
              <input type="" className="inputs" id = "name"/>
            </div>
            <div className="email dets">
              <label htmlFor="#email">Email</label>
              <input type="mail" className="inputs" id = "email"/>
            </div>
            <div className="password dets">
              <label htmlFor=".password">Password</label>
              <input type="password" className="inputs" id = "password"/>
            </div>
            <div className="remember-me-section">

            </div>
            <div className="login-buttons">
              <button>Sign Up</button>
              <p>
                already have an account? 
                <span>Sign In</span>
              </p>
            </div>
          </div>
        </div>
       </section>
       
       
    </>

    
  )
}

export default Login
