
import React, { useState } from 'react';
function LoginCom() {
  
 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
  
    const signIn = (e) => {
      e.preventDefault();
      let isValid = true;
  
      if (email.trim() === '') {
        setEmailError('Email is required');
        isValid = false;
      } else if (!isValidEmail(email.trim())) {
        setEmailError('Email is not valid');
        isValid = false;
      } else {
        setEmailError('');
      }
  
      if (password.trim() === '') {
        setPasswordError('Password is required');
        isValid = false;
      } else if (password.trim().length < 6) {
        setPasswordError('Password must be at least 6 characters');
        isValid = false;
      } else {
        setPasswordError('');
      }
  
      if (isValid) {
        // Proceed with form submission or AJAX call
        console.log('Form is valid');
      }
    };
  
    const isValidEmail = (email) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
    };
  return (
    <div className=" text-white  ">
    <div className="bread-crum  text-white bg-slate-700 h-60 bg-[url('Images/breadcrumb_bg.jpg')] bg-cover bg-center   ">
   <div className=" grid place-items-center bg-[rgba(19,19,48,0.7)] h-72">
          <div className=" w-[90%] mx-auto borde h-28 ">
          <h3 className="mt-2 font-bold text-4xl">Dashboard</h3>
          <div className="mt-4  ">
            <a className="no-underline text-white" href="#">
              <span className="text-xl">Eduvalt</span>
            </a>
            <i class="fa-solid p-1 fa-chevron-right"></i>
            <span className="px-2 text-xl">Dashboard</span>
          </div>
        </div>
        </div>
    </div>
    <div className="    flex justify-center sm:h-[600px]">
      <div className="sm:w-[94%] w-[98%]  flex justify-center">
        <div className=" sm:w-[55%] w-[98%]   ">
          <div className="sm:py-24 py-20 ">
            <div className="sm:flex justify-center">
              <div  className="form-box rounded-lg  sm:w-[85%]  border border-slate-800  text-black bg-white shadow-lg">
                <div className="p-3   ">
                  <div className="sm:text-xl p-2">Hi, Welcome back!</div>
                  <div className=" mt-3 ">
                    <div className="border border-black  rounded-lg p-1 ">
                      {" "}
                      <input className="  p-1 w-full outline-none" placeholder="Username Or Email Address"  required
                      
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
           {emailError && <small>{emailError}</small>}
                    </div>
                    <div className="border border-black mt-3 rounded-lg p-1 ">
                      {" "}
                      <input className="w-full  p-1 outline-none" placeholder="Password"  minlength="6" required
                     
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
                      {passwordError && <small>{passwordError}</small>}
                    </div>

                    <div className="-1 mt-4 border-red-600">
                      <div className=" flex justify-between mx-3">
                        <div className=" p-2 ">
                          <input className="" type="checkbox" name="" id="" />
                          Keep me signed in
                        </div>
                        <div className="p-2">Forgot?</div>
                        
                      </div>
                      <div className=" mt-6 text-center bg-blue-700 text-white rounded-lg">
                        <button  onClick={signIn} className="text-xl p-2 " type="submit">Singn in</button>
                      </div>
                      <div className="text-lg mt-2  sm:mx-20 mx-8">Don't have an account?<a className="no-underline ml-2 " href="">Register Now</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default LoginCom