import React, { useState } from 'react';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import LocalPostOfficeOutlinedIcon from "@mui/icons-material/LocalPostOfficeOutlined";

function ContactCom() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [subject, setSubject] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [subjectError, setSubjectError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;

    if (name.trim() === '') {
      setNameError('Name is required');
      isValid = false;
    } else {
      setNameError('');
    }

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

    if (subject.trim() === '') {
      setSubjectError('Subject is required');
      isValid = false;
    } else {
      setSubjectError('');
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
    <div className="  ">
      {" "}
      <div className="bread-crum  text-white bg-slate-700 h-60 bg-[url('Images/breadcrumb_bg.jpg')] bg-cover bg-center   ">
        
        <div className=" grid place-items-center bg-[rgba(19,19,48,0.7)] h-60">
          <div className=" w-[90%] mx-auto borde h-28 ">
          <h3 className="mt-2 font-bold text-4xl">Contact</h3>
          <div className="mt-4  ">
            <a className="no-underline text-white" href="#">
              <span className="text-xl">Eduvalt</span>
            </a>
            <i class="fa-solid p-1 fa-chevron-right"></i>
            <span className="px-2 text-xl">Contact</span>
          </div>
        </div>
        </div>
      </div>
      {/*2nd ********************************** */}
      <div className="">
        <div className="py-16  borde sm:flex gap-2 mx-3">
          <div className="borde sm:p-2  ">
            <div className="">
              <h3 className="text-dblue font-bold ">Keep In Touch With Us</h3>
              <p className="w-10 h-2 bg-blue-700 rounded-lg"></p>
              <div className="flex justify-center items-center py-2 px-3">
                <div className=" p-2 bg-lblue rounded-full text-white">
                  {" "}
                  <LocationOnIcon sx={{ fontSize: 30 }} />
                </div>
                <p className="text-slate-600 px-1">
                  68 Street Holakt Street world 10002 New York
                </p>
              </div>
              <div className="flex justify-center items-center py-2 px-3">
                <div className=" p-2 bg-lblue rounded-full text-white">
                  {" "}
                  <PhoneIcon sx={{ fontSize: 30 }} />
                </div>
                <p className="text-slate-600 px-1">
                  68 Street Holakt Street world 10002 New York
                </p>
              </div>
              <div className="flex justify-center items-center py-2 px-3">
                <div className=" p-2 bg-lblue rounded-full text-white">
                  {" "}
                  <LocalPostOfficeOutlinedIcon sx={{ fontSize: 30 }} />
                </div>
                <p className="text-slate-600 px-1">
                  68 Street Holakt Street world 10002 New York
                </p>
              </div>
            </div>
          </div>
          {/* *****************************         */}
          <div className="border shadow-lg rounded-md">
            <div onSubmit={handleSubmit} className="borde">
              <h5 className="text-dblue font-bold px-3 my-2">Get In Touch</h5>
              <p className="w-10 h-2 bg-blue-700 rounded-lg mx-3"></p>

              <div className="sm:flex gap-x-4 gap-y-6 flex-wrap borde p-3">
                <input
                  className="sm:w-[48%] w-[98%] mt-2 px-3 py-2 outline-none border-1 border-slate-600 rounded-md"
                  type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
                  placeholder="Name*" required
                />          {nameError && <small>{nameError}</small>}

                <input
                  className="sm:w-[48%] w-[98%] mt-2 px-3 py-2 border-1 border-slate-600 rounded-md outline-none"
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email*"required
                /> {emailError && <small>{emailError}</small>}
                <input
                  className="sm:w-[48%] w-[98%] mt-2 px-3 py-2 outline-none border-1 border-slate-600 rounded-md"
                  type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password*"required
                />{passwordError && <small>{passwordError}</small>}
                <input
                  className="sm:w-[48%] w-[98%] px-3 mt-2 py-2 outline-none border-1 border-slate-600 rounded-md"
                  type="text"
                  id="subject"
                  name="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Subject*"required
                />
                 {subjectError && <small>{subjectError}</small>}
              </div>
              <div className="flex justify-center">
                <textarea
                  className="resize border-1 border-slate-600 rounded-md w-[93%] h-28 outline-none p-1"
                  placeholder="Your Message*"
                ></textarea>
              </div>
              <button type="submit" className="p-2 text-center text-white mx-4 my-3 text- rounded-md bg-lblue">
                SEND MESSAGE
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="borde border-black" >
        <div className="">
        <iframe className="w-full"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15062.175825256429!2d72.86336325!3d19.30218845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1724853123340!5m2!1sen!2sin"
            
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ContactCom;
