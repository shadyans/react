import React from "react";
import GridViewIcon from "@mui/icons-material/GridView";
import SearchIcon from "@mui/icons-material/Search";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
function CourseComp() {
  return (
    <div className="  ">
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
      {/* ************************************ */}
      <div className="     ">
        <div className="   ">
          <div className="  py-28  ">
            <div className=" grid grid-cols-12  gap-4">
              <div className="sm:col-span-3  mx-2 border sm: col-span-12">
                <div className="input-form  hidden sm:block ">
                  <div className="  -black rounded-md bg-white  w-[60%] sm:w-[70%] text-black p-2">
                    {" "}
                    <a className="text-slate-400 p-1" href="">
                      <SearchIcon />
                    </a>
                    <input
                      className="sm:p-1 ml-2 "
                      type="text"
                      name=""
                      id=""
                      placeholder="Search..."
                    />
                  </div>
                </div>

                {/* Facility */}
                <div className="options  sm:flex sm:flex-col sm:justify-center sm:items-center mt-4 p-2 hidden">
                  <div className=" sm:w-[96%] ">
                    <div className=" font-semibold p-1 mx-1 ">Facility</div>
                    <div className="check flex flex-col mt-1 mx-1 ">
                      <div className="h-2">
                        <div className="mx-1 bg-black h-1 sm:w-[22%]"></div>
                      </div>
                      <div className="text-slate-500">
                        {" "}
                        <input type="checkbox" />
                        Business (8)
                      </div>
                      <div className="text-slate-500">
                        {" "}
                        <input type="checkbox" /> Design(6)
                      </div>
                      <div className="text-slate-500">
                        {" "}
                        <input type="checkbox" />
                        Developement (6)
                      </div>
                      <div className="text-slate-500">
                        {" "}
                        <input type="checkbox" />
                        Health & Fitnees (6)
                      </div>
                      <div className="text-slate-500">
                        {" "}
                        <input type="checkbox" />
                        Marketing (5)
                      </div>
                    </div>
                  </div>
                </div>
                <div className="options  sm:flex sm:flex-col sm:justify-center sm:items-center mt-4 p-2 hidden">
                  <div className=" sm:w-[96%]">
                    <div className=" font-semibold p-1 mx-1">Department</div>
                    <div className="check flex flex-col mt-1 ">
                      <div className="h-2">
                        <div className="mx-1 bg-black h-1 sm:w-[25%]"></div>
                      </div>
                      <div className="text-slate-500">
                        {" "}
                        <input className="mx-1 " type="checkbox" />
                        Finance (1)
                      </div>
                      <div className="text-slate-500">
                        {" "}
                        <input className="mx-1" type="checkbox" />
                        Project Manegement (1)
                      </div>
                      <div className="text-slate-500">
                        {" "}
                        <input className="mx-1" type="checkbox" />
                        Sales (1)
                      </div>
                      <div className="text-slate-500">
                        {" "}
                        <input className="mx-1" type="checkbox" />
                        Graphic Design (1)
                      </div>
                      <div className="text-slate-500">
                        {" "}
                        <input className="mx-1" type="checkbox" />
                        UI/UX Design (1)
                      </div>
                      <div className="text-slate-500">
                        {" "}
                        <input className="mx-1" type="checkbox" />
                        3D & Animation (1)
                      </div>
                      <div className="text-slate-500">
                        {" "}
                        <input className="mx-1" type="checkbox" />
                        JvaScript(2)
                      </div>
                      <div className="text-slate-500">
                        {" "}
                        <input className="mx-1" type="checkbox" />
                        PHP(1)
                      </div>
                      <div className="text-slate-500">
                        {" "}
                        <input className="mx-1" type="checkbox" />
                        WordPress(1)
                      </div>
                    </div>
                  </div>
                </div>
                {/* Prices */}
                <div className="options  sm:flex sm:flex-col sm:justify-center sm:items-center mt-4 p-2 hidden">
                  <div className=" sm:w-[96%]">
                    <div className=" p-1 font-semibold mx-1">Prices</div>
                    <div className="check flex flex-col mt-1 ">
                      <div className="text-slate-500">
                        {" "}
                        <input className="mx-1" type="checkbox" />
                        Fee
                      </div>
                      <div className="text-slate-500">
                        {" "}
                        <input className="mx-1" type="checkbox" />
                        Paid
                      </div>
                    </div>
                  </div>
                </div>
                {/* levels */}
                <div className="options  sm:flex sm:flex-col sm:justify-center sm:items-center mt-4 p-2 hidden ">
                  <div className=" sm:w-[96%]">
                    <div className=" font-semibold p-1 mx-1">levels</div>
                    <div className="check flex flex-col mt-1 ">
                      <div className="h-2">
                        <div className="mx-1 bg-black h-1 sm:w-[25%]"></div>
                      </div>
                      <div className="text-slate-500">
                        {" "}
                        <input className="mx-1" type="checkbox" />
                        All Levels
                      </div>
                      <div className="text-slate-500">
                        {" "}
                        <input className="mx-1" type="checkbox" />
                        Beginner
                      </div>
                      <div className="text-slate-500">
                        {" "}
                        <input className="mx-1" type="checkbox" />
                        Inntermedate
                      </div>
                      <div className="text-slate-500">
                        {" "}
                        <input className="mx-1" type="checkbox" />
                        Expert
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sm:col-span-9  col-span-12 ">
                <div className=" -black">
                  <div className=" borer -black  flex justify-between items-center">
                    <div className="boder-2">
                      <p className="p-1 text-wrap  my-auto sm:text-xl sm:font-semibold">
                        Showing All 9 results{" "}
                      </p>
                    </div>

                    <div className="boder-2 flex">
                      <div className=" mt-2 borer mx-2 ">
                        <select
                          className="px-4 py-2  -black "
                          name="cars"
                          id="cars"
                        >
                          <option value="Newest">Newest</option>
                          <option value="Oldest">Oldest</option>
                          <option value=" High-Low">Price High-Low</option>
                          <option value="Low-High">Price Low-High</option>
                          <option value="Course">Course Title</option>
                        </select>
                      </div>
                      <div className="p-2">
                        <div className="p-1  -black text-white text-center bg-blue-600 rounded">
                          <GridViewIcon fontSize="large" />
                        </div>
                      </div>
                      <div className="p-2 ">
                        <div className="p-1  -black text-blue-600 bg-white rounded">
                          <FormatListBulletedIcon fontSize="large" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="  cards flex flex-wrap gap-x-4 justify-center">
                    <div className="sm:w-[31%] shadow-lg mt-4 rounded-2xl-t  ">
                      <div className="relative  ">
                        <a href="#">
                          <img
                            className="rounded-t-2xl"
                            src="./Images/courses01.jpg"
                            alt=""
                          />
                        </a>
                        <div className="absolute text-xs font-semibold left-5 top-3 rounded-xl  p-1 hover:bg-green-300 bg-green-100  ">
                          <a
                            className="text-green-700 no-underline p-2"
                            href=""
                          >
                            Marketing
                          </a>
                        </div>
                      </div>
                      <div className="flex mx-1 mt-3">
                        <a
                          className="no-underline  text-black font-medium"
                          href=""
                        >
                          Bigener Adobe Illustrator for Graphic Design
                        </a>
                      </div>
                      <div className="sm:flex text-slate-500 mx-1 gap-2 mt-3">
                        <span className="p-1">
                          <span>
                            <ImportContactsIcon />
                          </span>{" "}
                          6 Lessons
                        </span>
                        <span className="p-1">
                          <span>
                            <WatchLaterOutlinedIcon />
                          </span>{" "}
                          12h 30m
                        </span>
                        <span className="p-1">
                          <span>
                            <PeopleOutlineOutlinedIcon />
                          </span>{" "}
                          199 Students
                        </span>
                      </div>
                      <a className="no-underline " href="">
                        <div className="-t-[2px] -slate-300 mt-3 flex justify-between px-2 items-center">
                          <div className=" my-3 text-xl font-semibold">
                            Free
                          </div>
                          <div>
                            <span className="text-yellow-400">
                              <StarOutlineIcon fontSize="small" />
                            </span>
                            <span className="text-yellow-400">
                              <StarOutlineIcon fontSize="small" />
                            </span>
                            <span className="text-yellow-400">
                              <StarOutlineIcon fontSize="small" />
                            </span>
                            <span className="text-slate-500">(452)</span>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="sm:w-[31%] shadow-lg  mt-4 rounded-2xl-t  ">
                      <div className="relative  ">
                        <a href="#">
                          <img
                            className="rounded-t-2xl"
                            src="./Images/courses02.jpg"
                            alt=""
                          />
                        </a>
                        <div className="absolute text-xs font-semibold left-5 top-3 rounded-xl  p-1 hover:bg-green-300 bg-green-100  ">
                          <a
                            className="text-green-700 no-underline p-2"
                            href=""
                          >
                           Algebra
                          </a>
                        </div>
                      </div>
                      <div className="flex mx-1 mt-3">
                        <a
                          className="no-underline  text-black font-medium"
                          href=""
                        >
                         How to Market Yourself as a Coach or Consultant
                        </a>
                      </div>
                      <div className="sm:flex text-slate-500 mx-1 gap-2 mt-3">
                        <span className="p-1">
                          <span>
                            <ImportContactsIcon />
                          </span>{" "}
                          6 Lessons
                        </span>
                        <span className="p-1">
                          <span>
                            <WatchLaterOutlinedIcon />
                          </span>{" "}
                          12h 30m
                        </span>
                        <span className="p-1">
                          <span>
                            <PeopleOutlineOutlinedIcon />
                          </span>{" "}
                          199 Students
                        </span>
                      </div>
                      <a className="no-underline " href="">
                        <div className="-t-[2px] -slate-300 mt-3 flex justify-between px-2 items-center">
                          <div className=" my-3 text-xl font-semibold">
                            Free
                          </div>
                          <div>
                            <span className="text-yellow-400">
                              <StarOutlineIcon fontSize="small" />
                            </span>
                            <span className="text-yellow-400">
                              <StarOutlineIcon fontSize="small" />
                            </span>
                            <span className="text-yellow-400">
                              <StarOutlineIcon fontSize="small" />
                            </span>
                            <span className="text-slate-500">(452)</span>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="sm:w-[31%] shadow-lg mt-4 rounded-2xl-t  ">
                      <div className="relative  ">
                        <a href="#">
                          <img
                            className="rounded-t-2xl"
                            src="./Images/courses03.jpg"
                            alt=""
                          />
                        </a>
                        <div className="absolute text-xs font-semibold left-5 top-3 rounded-xl  p-1 hover:bg-green-300 bg-green-100  ">
                          <a
                            className="text-green-700 no-underline p-2"
                            href=""
                          >
                            Design
                          </a>
                        </div>
                      </div>
                      <div className="flex mx-1 mt-3">
                        <a
                          className="no-underline  text-black font-medium"
                          href=""
                        >
                          Become a Certified JavaScript Developer
                        </a>
                      </div>
                      <div className="sm:flex text-slate-500 mx-1 gap-2 mt-3">
                        <span className="p-1">
                          <span>
                            <ImportContactsIcon />
                          </span>{" "}
                          6 Lessons
                        </span>
                        <span className="p-1">
                          <span>
                            <WatchLaterOutlinedIcon />
                          </span>{" "}
                          12h 30m
                        </span>
                        <span className="p-1">
                          <span>
                            <PeopleOutlineOutlinedIcon />
                          </span>{" "}
                          199 Students
                        </span>
                      </div>
                      <a className="no-underline " href="">
                        <div className="-t-[2px] -slate-300 mt-3 flex justify-between px-2 items-center">
                          <div className=" my-3 text-xl font-semibold">
                            Free
                          </div>
                          <div>
                            <span className="text-yellow-400">
                              <StarOutlineIcon fontSize="small" />
                            </span>
                            <span className="text-yellow-400">
                              <StarOutlineIcon fontSize="small" />
                            </span>
                            <span className="text-yellow-400">
                              <StarOutlineIcon fontSize="small" />
                            </span>
                            <span className="text-slate-500">(452)</span>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="sm:w-[31%] shadow-lg mt-4 rounded-2xl-t  ">
                      <div className="relative  ">
                        <a href="#">
                          <img
                            className="rounded-t-2xl"
                            src="./Images/courses04.jpg"
                            alt=""
                          />
                        </a>
                        <div className="absolute text-xs font-semibold left-5 top-3 rounded-xl  p-1 hover:bg-green-300 bg-green-100  ">
                          <a
                            className="text-green-700 no-underline p-2"
                            href=""
                          >
                           Development
                          </a>
                        </div>
                      </div>
                      <div className="flex mx-1 mt-3">
                        <a
                          className="no-underline  text-black font-medium"
                          href=""
                        >
                          Web Development Fully Complete Guideline
                        </a>
                      </div>
                      <div className="sm:flex text-slate-500 mx-1 gap-2 mt-3">
                        <span className="p-1">
                          <span>
                            <ImportContactsIcon />
                          </span>{" "}
                          6 Lessons
                        </span>
                        <span className="p-1">
                          <span>
                            <WatchLaterOutlinedIcon />
                          </span>{" "}
                          12h 30m
                        </span>
                        <span className="p-1">
                          <span>
                            <PeopleOutlineOutlinedIcon />
                          </span>{" "}
                          199 Students
                        </span>
                      </div>
                      <a className="no-underline " href="">
                        <div className="-t-[2px] -slate-300 mt-3 flex justify-between px-2 items-center">
                          <div className=" my-3 text-xl font-semibold">
                            Free
                          </div>
                          <div>
                            <span className="text-yellow-400">
                              <StarOutlineIcon fontSize="small" />
                            </span>
                            <span className="text-yellow-400">
                              <StarOutlineIcon fontSize="small" />
                            </span>
                            <span className="text-yellow-400">
                              <StarOutlineIcon fontSize="small" />
                            </span>
                            <span className="text-slate-500">(452)</span>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="sm:w-[31%] shadow-lg mt-4 rounded-2xl-t  ">
                      <div className="relative  ">
                        <a href="#">
                          <img
                            className="rounded-t-2xl"
                            src="./Images/courses05.jpg"
                            alt=""
                          />
                        </a>
                        <div className="absolute text-xs font-semibold left-5 top-3 rounded-xl  p-1 hover:bg-green-300 bg-green-100  ">
                          <a
                            className="text-green-700 no-underline p-2"
                            href=""
                          >
                            Business
                          </a>
                        </div>
                      </div>
                      <div className="flex mx-1 mt-3">
                        <a
                          className="no-underline  text-black font-medium"
                          href=""
                        >
                          Photography training for the Artist in you
                        </a>
                      </div>
                      <div className="sm:flex text-slate-500 mx-1 gap-2 mt-3">
                        <span className="p-1">
                          <span>
                            <ImportContactsIcon />
                          </span>{" "}
                          6 Lessons
                        </span>
                        <span className="p-1">
                          <span>
                            <WatchLaterOutlinedIcon />
                          </span>{" "}
                          12h 30m
                        </span>
                        <span className="p-1">
                          <span>
                            <PeopleOutlineOutlinedIcon />
                          </span>{" "}
                          199 Students
                        </span>
                      </div>
                      <a className="no-underline " href="">
                        <div className="-t-[2px] -slate-300 mt-3 flex justify-between px-2 items-center">
                          <div className=" my-3 text-xl font-semibold">
                            Free
                          </div>
                          <div>
                            <span className="text-yellow-400">
                              <StarOutlineIcon fontSize="small" />
                            </span>
                            <span className="text-yellow-400">
                              <StarOutlineIcon fontSize="small" />
                            </span>
                            <span className="text-yellow-400">
                              <StarOutlineIcon fontSize="small" />
                            </span>
                            <span className="text-slate-500">(452)</span>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="sm:w-[31%] shadow-lg mt-4 rounded-2xl-t  ">
                      <div className="relative  ">
                        <a href="#">
                          <img
                            className="rounded-t-2xl"
                            src="./Images/courses06.jpg"
                            alt=""
                          />
                        </a>
                        <div className="absolute text-xs font-semibold left-5 top-3 rounded-xl  p-1 hover:bg-green-300 bg-green-100  ">
                          <a
                            className="text-green-700 no-underline p-2"
                            href=""
                          >
                            3D & Animation
                          </a>
                        </div>
                      </div>
                      <div className="flex mx-1 mt-3">
                        <a
                          className="no-underline  text-black font-medium"
                          href=""
                        >
                         The Complete Guide to the Global Markets
                        </a>
                      </div>
                      <div className="sm:flex text-slate-500 mx-1 gap-2 mt-3">
                        <span className="p-1">
                          <span>
                            <ImportContactsIcon />
                          </span>{" "}
                          6 Lessons
                        </span>
                        <span className="p-1">
                          <span>
                            <WatchLaterOutlinedIcon />
                          </span>{" "}
                          12h 30m
                        </span>
                        <span className="p-1">
                          <span>
                            <PeopleOutlineOutlinedIcon />
                          </span>{" "}
                          199 Students
                        </span>
                      </div>
                      <a className="no-underline " href="">
                        <div className="-t-[2px] -slate-300 mt-3 flex justify-between px-2 items-center">
                          <div className=" my-3 text-xl font-semibold">
                            Free
                          </div>
                          <div>
                            <span className="text-yellow-400">
                              <StarOutlineIcon fontSize="small" />
                            </span>
                            <span className="text-yellow-400">
                              <StarOutlineIcon fontSize="small" />
                            </span>
                            <span className="text-yellow-400">
                              <StarOutlineIcon fontSize="small" />
                            </span>
                            <span className="text-slate-500">(452)</span>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="sm:w-[31%] shadow-lg mt-4 rounded-2xl-t  ">
                      <div className="relative  ">
                        <a href="#">
                          <img
                            className="rounded-t-2xl"
                            src="./Images/courses07.jpg"
                            alt=""
                          />
                        </a>
                        <div className="absolute text-xs font-semibold left-5 top-3 rounded-xl  p-1 hover:bg-green-300 bg-green-100  ">
                          <a
                            className="text-green-700 no-underline p-2"
                            href=""
                          >
                            Business
                          </a>
                        </div>
                      </div>
                      <div className="flex mx-1 mt-3">
                        <a
                          className="no-underline  text-black font-medium"
                          href=""
                        >
                          Sales Training Practical Sales Techniques

                        </a>
                      </div>
                      <div className="sm:flex text-slate-500 mx-1 gap-2 mt-3">
                        <span className="p-1">
                          <span>
                            <ImportContactsIcon />
                          </span>{" "}
                          6 Lessons
                        </span>
                        <span className="p-1">
                          <span>
                            <WatchLaterOutlinedIcon />
                          </span>{" "}
                          12h 30m
                        </span>
                        <span className="p-1">
                          <span>
                            <PeopleOutlineOutlinedIcon />
                          </span>{" "}
                          199 Students
                        </span>
                      </div>
                      <a className="no-underline " href="">
                        <div className="-t-[2px] -slate-300 mt-3 flex justify-between px-2 items-center">
                          <div className=" my-3 text-xl font-semibold">
                            Free
                          </div>
                          <div>
                            <span className="text-yellow-400">
                              <StarOutlineIcon fontSize="small" />
                            </span>
                            <span className="text-yellow-400">
                              <StarOutlineIcon fontSize="small" />
                            </span>
                            <span className="text-yellow-400">
                              <StarOutlineIcon fontSize="small" />
                            </span>
                            <span className="text-slate-500">(452)</span>
                          </div>
                        </div>
                      </a>
                    </div>{" "}
                    <div className="sm:w-[31%] shadow-lg mt-4 rounded-2xl-t  ">
                      <div className="relative  ">
                        <a href="#">
                          <img
                            className="rounded-t-2xl"
                            src="./Images/courses08.jpg"
                            alt=""
                          />
                        </a>
                        <div className="absolute text-xs font-semibold left-5 top-3 rounded-xl  p-1 hover:bg-green-300 bg-green-100  ">
                          <a
                            className="text-green-700 no-underline p-2"
                            href=""
                          >
                            Business
                          </a>
                        </div>
                      </div>
                      <div className="flex mx-1 mt-3">
                        <a
                          className="no-underline  text-black font-medium"
                          href=""
                        >
                        Complete Guidelines advanced fundamentals
                        </a>
                      </div>
                      <div className="sm:flex text-slate-500 mx-1 gap-2 mt-3">
                        <span className="p-1">
                          <span>
                            <ImportContactsIcon />
                          </span>{" "}
                          6 Lessons
                        </span>
                        <span className="p-1">
                          <span>
                            <WatchLaterOutlinedIcon />
                          </span>{" "}
                          12h 30m
                        </span>
                        <span className="p-1">
                          <span>
                            <PeopleOutlineOutlinedIcon />
                          </span>{" "}
                          199 Students
                        </span>
                      </div>
                      <a className="no-underline " href="">
                        <div className="-t-[2px] -slate-300 mt-3 flex justify-between px-2 items-center">
                          <div className=" my-3 text-xl font-semibold">
                            Free
                          </div>
                          <div>
                            <span className="text-yellow-400">
                              <StarOutlineIcon fontSize="small" />
                            </span>
                            <span className="text-yellow-400">
                              <StarOutlineIcon fontSize="small" />
                            </span>
                            <span className="text-yellow-400">
                              <StarOutlineIcon fontSize="small" />
                            </span>
                            <span className="text-slate-500">(452)</span>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="sm:w-[31%] shadow-lg mt-4 rounded-2xl-t  ">
                      <div className="relative  ">
                        <a href="#">
                          <img
                            className="rounded-t-2xl"
                            src="./Images/courses01.jpg"
                            alt=""
                          />
                        </a>
                        <div className="absolute text-xs font-semibold left-5 top-3 rounded-xl  p-1 hover:bg-green-300 bg-green-100  ">
                          <a
                            className="text-green-700 no-underline p-2"
                            href=""
                          >
                            Marketing
                          </a>
                        </div>
                      </div>
                      <div className="flex mx-1 mt-3">
                        <a
                          className="no-underline  text-black font-medium"
                          href=""
                        >
                          Bigener Adobe Illustrator for Graphic Design
                        </a>
                      </div>
                      <div className="sm:flex text-slate-500 mx-1 gap-2 mt-3">
                        <span className="p-1">
                          <span>
                            <ImportContactsIcon />
                          </span>{" "}
                          6 Lessons
                        </span>
                        <span className="p-1">
                          <span>
                            <WatchLaterOutlinedIcon />
                          </span>{" "}
                          12h 30m
                        </span>
                        <span className="p-1">
                          <span>
                            <PeopleOutlineOutlinedIcon />
                          </span>{" "}
                          199 Students
                        </span>
                      </div>
                      <a className="no-underline " href="">
                        <div className="-t-[2px] -slate-300 mt-3 flex justify-between px-2 items-center">
                          <div className=" my-3 text-xl font-semibold">
                            Free
                          </div>
                          <div>
                            <span className="text-yellow-400">
                              <StarOutlineIcon fontSize="small" />
                            </span>
                            <span className="text-yellow-400">
                              <StarOutlineIcon fontSize="small" />
                            </span>
                            <span className="text-yellow-400">
                              <StarOutlineIcon fontSize="small" />
                            </span>
                            <span className="text-slate-500">(452)</span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseComp;
