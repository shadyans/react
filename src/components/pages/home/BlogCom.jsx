import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

function BlogCom() {
  return (
    <div className=" border borde-blue-200 grid grid-cols-12 bg-[#f5f8f6] h-auto mt-3">
      {/* 1st rowborder-2 border-black */}
      <div className="   col-span-12 flex flex-col items-center justify-center gap-2  text-center ">
        <div className=" borde w-[229px] mt-2  bg-[#e4ebf5] text-blue-700">
          always Smart to Hear News
        </div>
        <h1 className=" w-[368px] borde mt-2 text-[#161057] text-3xl font-bold sm:text-4xl">
          Latest <span className="text-blue-800">News</span> & Blog
        </h1>

        <p className="borde sm:w-[45%] border-black sm:text-xl text-slate-600 w-[94%]">
          Receive huge benefits with our lifetime Plumbing Receive huge benefits
          with our lifetime Plumbing email address will be shown
        </p>

        <div className="  sm:w-[90%] w-[98%] my-8 sm:flex sm:justify-center sm:gap-6 ">
          <div className="shadow-lg sm:w-[30%] flex flex-col rounded-lg my-4 ">
            <a className="" href="">
              {" "}
              <img
                className="rounded-lg h-60 "
                src="https://ifingerstudio.com/eduvalt/wp-content/uploads/2023/06/blog_standard01.jpg"
                alt=""
              />
            </a>
            <a className="no-underline " href="">
              <div className="flex ml-8 mt-3 items-center">
                <p className="  p-1 text-sm hover:bg-blue-600 hover:text-white text-blue-500 rounded-full px-4 bg-[#e4ebf5] mb-0  ">
                  Finance
                </p>
              </div>
            </a>
            <div className="mt-2  flex">
              <a className="no-underline" href="">
                <h3 className="w-[] text-black text-wrap">
                  when aeunkno printer took galley of scrambled
                </h3>
              </a>
            </div>
            <div className="flex ml-8 mt-3 text-slate-600 ">
              <p>
                <span>
                  <PersonIcon sx={{ fontSize: [23] }} />
                </span>{" "}
                By eduvalt
              </p>
              <p className="mx-12 text-slate-600">
                {" "}
                <span>
                  <CalendarMonthIcon sx={{ fontSize: [23] }} />
                </span>{" "}
                June 22,2023
              </p>
            </div>
          </div>
          <div className="shadow-lg sm:w-[30%] flex flex-col rounded-lg my-4 ">
            <a href="">
              {" "}
              <img
                className="rounded-lg h-60 "
                src="https://ifingerstudio.com/eduvalt/wp-content/uploads/2023/06/blog_standard02.jpg"
                alt=""
              />
            </a>
            <a className="no-underline " href="">
              <div className="flex ml-8 mt-3 items-center">
                <p className="  p-1 text-sm hover:bg-blue-600 hover:text-white text-blue-500 rounded-full px-4 bg-[#e4ebf5] mb-0  ">
                  Finance
                </p>
              </div>
            </a>
            <div className="mt-2  flex">
              <a className="no-underline" href="">
                <h3 className="w-[] text-black text-wrap">
                  Business Full Stack GraphQL With Next.js And Vercel{" "}
                </h3>
              </a>
            </div>
            <div className="flex ml-8 mt-3 text-slate-600 ">
              <p>
                <span>
                  <PersonIcon sx={{ fontSize: [23] }} />
                </span>{" "}
                By eduvalt
              </p>
              <p className="mx-12 text-slate-600">
                {" "}
                <span>
                  <CalendarMonthIcon sx={{ fontSize: [23] }} />
                </span>{" "}
                June 22,2023
              </p>
            </div>
          </div>

          <div className="shadow-lg sm:w-[30%] flex flex-col rounded-lg my-4 ">
            <a href="">
              {" "}
              <img
                className="rounded-lg h-60 "
                src="https://ifingerstudio.com/eduvalt/wp-content/uploads/2023/06/blog_standard03.jpg"
                alt=""
              />
            </a>
            <a className="no-underline " href="">
              <div className="flex ml-8 mt-3 items-center">
                <p className="  p-1 text-sm hover:bg-blue-600 hover:text-white text-blue-500 rounded-full px-4 bg-[#e4ebf5] mb-0  ">
                  Finance
                </p>
              </div>
            </a>
            <div className="mt-2  flex">
              <a className="no-underline" href="">
                <h3 className="w-[] text-black text-wrap">
                  What Leonardo Teach us About Web Design{" "}
                </h3>
              </a>
            </div>
            <div className="flex ml-8 mt-3 text-slate-600 ">
              <p>
                <span>
                  <PersonIcon sx={{ fontSize: [23] }} />
                </span>{" "}
                By eduvalt
              </p>
              <p className="mx-12 text-slate-600">
                {" "}
                <span>
                  <CalendarMonthIcon sx={{ fontSize: [23] }} />
                </span>{" "}
                June 22,2023
              </p>
            </div>
          </div>
        </div>
      </div>

     
      <div className=" my-4  col-span-12 flex flex-col items-center justify-center gap-2 mt-5 text-center sm:h-80">
        <div className="sm:w-[94%]   sm:flex sm:gap-3  sm:items-center  ">
          <div className=" -1  -black ">
            {" "}
            <h2 className="w-[368px]  sm:mb-36 -black text-3xl sm:text-5xl text-[#161057]  mt-2  font-bold">
              Let's Join To Our Newsletter
            </h2>
          </div>
          <div className="sm:w-[60%] sm:mt-28  ">
            <div className="   bg-[#e4ebf5] rounded-3xl m-3 flex items-center justify-between p-2 ">
              <div className="">
                <input
                  className="p-1 bg-[#e8e9ec] outline-none"
                  type="text"
                  placeholder="Enter your email*"
                />
              </div>
              <button className="text-white -black bg-blue-700 font-semibold   p-2  rounded-2xl mx-2">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCom;
