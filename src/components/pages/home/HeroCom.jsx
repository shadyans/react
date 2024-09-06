import React from "react";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import { useNavigate } from "react-router-dom";

function HeroCom() {
  const navigate = useNavigate()
  function gotoExplore(){
    navigate('/courses')
  }
  return (
    <header className="  grid grid-cols-12 bg-slate-100 h-auto mt-2">
      {/* 1st row */}
      <div className="     col-span-12 flex flex-col items-center gap-2    sm:col-span-6">
        <div className="  sm:mx-10 sm:w-[500px] sm:mr-60 mt-3 sm:flex flex-row-reverse  text-wrap">
          <div className="  flex sm:mx-20 ">
            <img
              className="sm:px-2  h-[50px] w-[50px]  m-auto sm:h-[60px] sm:w-[60px]"
              src="https://ifingerstudio.com/eduvalt/wp-content/uploads/2023/07/bshape_02.png"
              alt="img"
            />
          </div>

          <div className="   mt-2 bg-[#e4ebf5] text-blue-700 text-wrap sm:text-lg  sm:font-semibold sm:h-10 sm:p-2 ">
            100% Satisfaction Guarantee
          </div>
        </div>
        <div className=" mt-2 text-wrap -1 -black text-blue-[#0a174a] text-3xl font-bold sm:font-bold  sm:text-6xl p-2">
          Learn <span className="text-blue-800">Skills</span> From Our Top
          Instructors
        </div>

        <div className=" sm:mt-12 -2 text-[rgb(57,85,126)] sm:text-xl text-wrap ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nihil
          ratione rem voluptate placeat. Ad consequuntur iusto magnam voluptatem
          odit ut assumenda itaque dolores! Accusamus deleniti laborum molestias
          architecto dolore?
        </div>
        <div className=" w-[368px]  sm:mt-8 sm:w-[600px] sm:flex justify-center items-center gap-x-6 ">
          <button onClick={gotoExplore} className="px-6 ml-8  sm:text-xl rounded-md h-12 text-white text-sm font-medium bg-[rgb(7,41,173)] sm:p-2 ">
            EXPLORE COURSES
          </button>

          <div className="flex justify-center items-center mt-3  ">
            <span className="font-semi mx-3 mt-2">
              <i className=" fa-solid fa-phone-volume text-3xl text-blue-800 "></i>
            </span>
            <div className="">
              <div className="text-[#2a3f5e] font-medium text-sm">
                Have Any Questions?{" "}
              </div>
              <a
                className="no-underline font-bold text-[#201f42] mr-40 text-xl"
                href="#"
              >
                993-00-99999
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2ntd row */}
      <div className=" -2 -black relative sm:col-span-6 bg-whi  col-span-12 flex flex-col justify-center gap-2 ">
        <div className=" ">
          <img
            className="h-16  absolute top-10 left-14 "
            src="https://ifingerstudio.com/eduvalt/wp-content/uploads/2023/07/bshape_03.png"
            alt=""
          />
          <img
            className="h-16 absolute right-10 top-10"
            src="https://ifingerstudio.com/eduvalt/wp-content/uploads/2023/07/bshape_05.png"
            alt=""
          />
          <img
            className=""
            src="https://ifingerstudio.com/eduvalt/wp-content/uploads/2023/07/banner_img.png"
            alt=""
          />
          <div className="text-center  h-36 w-[130px] rounded-lg shadow-slate-300 shadow-l bg-white absolute left-8 bottom-32 ">
            <div>
              <i className="fa-solid fa-users-line text-2xl text-slate-700 mt-2 bg-green-500 p-3 rounded-full"></i>
            </div>
            <div>Total students</div>
            <div className="text-2xl font-extrabold">15k</div>
          </div>

          <div className="text-center  h-24  w-[170px] rounded-lg shadow-slate-300 shadow-l bg-white absolute right-8 bottom-8 ">
            <SchoolOutlinedIcon
              className="absolute bottom-16 right-16"
              sx={{ fontSize: [50] }}
              color="primary"
            />
            <div className="mt-4">Compelete Graduation</div>
            <div className="text-2xl font-extrabold">34k</div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeroCom;
