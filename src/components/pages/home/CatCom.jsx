import React from "react";
import MotionPhotosAutoOutlinedIcon from "@mui/icons-material/MotionPhotosAutoOutlined";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import StoreIcon from '@mui/icons-material/Store';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
function CatCom() {
  return (
    <div className=" -2 -black grid grid-cols-12 h-auto  mt-5">
      {/* 1st row */}

      <div className="  sm:col-span-5 mx-6 col-span-12 flex flex-col items-cente  gap-2 mt-3 text-center  ">
        <div className="  w-[200px] mt-2 ml-2 bg-[#e4ebf5] text-blue-700">
          Unique Online Courses
        </div>

        <h1 className="sm:flex   mt-2 ml-2 text-blue-[#0a174a] text-2xl sm:text-4xl font-bold sm:p-2">
          Browse By <span className="text-blue-800 sm:mx-2"> Categories</span>{" "}
        </h1>

        <div className=" mt-2 text-[#39557E] sm:w-[90%] text-wrap sm:font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nihil
          ratione rem voluptate placeat. Ad consequuntur iusto magnam voluptatem
          odit ut assumenda itaque dolores! Accusamus deleniti laborum molestias
          architecto dolore?
        </div>

        <div className="  mx-auto mt-10 ml-2 w-40 sm:w-[200px]">
          <button className="px-6 -2 sm:px-10 rounded-md h-12 sm:h-14 text-white text-sm sm:text- font-medium bg-[#0729ad]">
            All CATEGORIES
          </button>
        </div>
      </div>

      {/* 2ntd row */}
      <div className="  sm:col-span-7 col-span-12 mx-4  text-white  text-center ">
        <div className=" sm:flex-wrap  flex flex-col sm:flex-row gap-y-6 gap-x-2 sm:justify-center ">
          <a
            className=" no-underline group sm:w-[32%] w-[90%] mx-auto   shadow-lg   rounded-md"
            href="#"
          >
            <div className="  mx-auto h-16 w-16  rounded-full my-6 group-hover:bg-[#b7d3f5] bg-slate-200 duration-1000  ">
              <MotionPhotosAutoOutlinedIcon
                sx={{ fontSize: 62, color: "blue" }}
              />
            </div>
            <h3 className="text-black text-wrap text-lg">3D Animation</h3>
            <p className="text-slate-600">06 Course</p>        
          </a>
          <a
            className="  no-underline group  sm:w-[32%] w-[90%] m-auto   shadow-lg border  rounded-md"
            href="#"
          >
            <div className="  mx-auto h-16 w-16  rounded-full my-6 group-hover:bg-[#b7d3f5]bg-slate-200 duration-1000  ">
              <StoreIcon
                sx={{ fontSize: 62, color: "blue" }}
              />
            </div>
            <h3 className="text-black text-wrap text-lg">Marketing</h3>
            <p className="text-slate-600">09 Course</p>        
          </a>

          <a
            className=" no-underline group  sm:w-[32%] w-[90%] m-auto   shadow-lg border  rounded-md"
            href="#"
          >
            <div className="  mx-auto h-16 w-16  rounded-full my-6 group-hover:bg-[#b7d3f5] bg-slate-200 duration-1000  ">
              <AccountBalanceIcon
                sx={{ fontSize: 50, color: "blue" }}
              />
            </div>
            <h3 className="text-black text-wrap text-lg">Finance</h3>
            <p className="text-slate-600">08 Course</p>        
          </a>

          <a
            className=" no-underline group  sm:w-[32%] w-[90%] m-auto   shadow-lg border  rounded-md"
            href="#"
          >
            <div className="  mx-auto h-16 w-16  rounded-full my-6 group-hover:bg-[#b7d3f5] bg-slate-200 duration-1000  ">
              <CorporateFareIcon
                sx={{ fontSize: 50, color: "blue" }}
              />
            </div>
            <h3 className="text-black text-wrap text-lg">Business</h3>
            <p className="text-slate-600">05 Course</p>        
          </a>

          <a
            className=" no-underline group  sm:w-[32%] w-[90%] m-auto   shadow-lg border  rounded-md"
            href="#"
          >
            <div className="  mx-auto h-16 w-16  rounded-full my-6 group-hover:bg-[#b7d3f5] bg-slate-200 duration-1000  ">
              <LibraryBooksIcon
                sx={{ fontSize: 50, color: "blue" }}
              />
            </div>
            <h3 className="text-black text-wrap text-lg">Algebra</h3>
            <p className="text-slate-600">15 Course</p>        
          </a>

          <a
            className=" no-underline group  sm:w-[32%] w-[90%] m-auto   shadow-lg border  rounded-md"
            href="#"
          >
            <div className="  mx-auto h-16 w-16  rounded-full my-6 group-hover:bg-[#b7d3f5] bg-slate-200 duration-1000  ">
              <MotionPhotosAutoOutlinedIcon
                sx={{ fontSize: 62, color: "blue" }}
              />
            </div>
            <h3 className="text-black text-wrap text-lg">3D Animation</h3>
            <p className="text-slate-600">06 Course</p>        
          </a>
          
        </div>
      </div>
    </div>
  );
}

export default CatCom;
