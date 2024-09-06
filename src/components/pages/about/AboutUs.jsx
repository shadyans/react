import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
function AboutUs() {
  return (
    <div className="">
     <div className="bread-crum  text-white bg-slate-700 h-60 bg-[url('Images/breadcrumb_bg.jpg')] bg-cover bg-center   ">
        <div className=" grid place-items-center bg-[rgba(19,19,48,0.7)] h-60">
        <div className=" w-[90%] mx-auto borde h-28 ">
          <h3 className="mt-2 font-bold text-4xl">About Us</h3>
          <div className="mt-4  ">
            <a className="no-underline text-white" href="#">
              <span className="text-xl">Eduvalt</span>
            </a>
            <i class="fa-solid p-1 fa-chevron-right"></i>
            <span className="px-2 text-xl">About Us</span>
          </div>
        </div>
        </div>
      </div>
      {/* *************************************      */}
      <div className="py-16 borde ">
        <div className=" sm:flex  w-[96%] mx-auto  borde borde-black">
          <div className="py-2 px-3 sm:w-[45%] borde">
            <p className="bg-blue-100 w-28 text-center rounded-sm text-lblue">
              Who we are
            </p>
            <h3 className="font-bold text-2xl ">
              The Leading Global <span className="text-lblue">Marketplace</span>{" "}
              For Learning And Instruction
            </h3>
            <p className="text-dblue">
              Borem ipsum dolor sit amet, consectetur adipiscing eliawe ellus
              luctus nec ullamcorper mattisBorem
            </p>
            <p className="text-slate-700">
              Bipsum dolor awtnse awctetur adipis we followelit. Borem.Borem
              ipsum dolamet consectetur adipiscing eliawe awUt elit ellutnse
              awcon sectetur adipiscing ectetur
            </p>
            <button className="px-12 py-2 bg-lblue text-white">
              Explore Courses
            </button>
          </div>
          <div className="borde grid grid-cols-2">
            <div className="py-16 px-2">
              <img
                src="	https://ifingerstudio.com/eduvalt/wp-content/uploads/2023/07/about_img03.jpg"
                alt=""
              />
              <img
                className="h-16 w-28"
                src="https://ifingerstudio.com/eduvalt/wp-content/uploads/2023/07/about_shape01.png"
                alt=""
              />
            </div>
            <div className="py-2">
              <img
                className="p-2"
                src="https://ifingerstudio.com/eduvalt/wp-content/uploads/2023/07/about_img04.jpg"
                alt=""
              />
              <img
                className="p-2"
                src="	https://ifingerstudio.com/eduvalt/wp-content/uploads/2023/07/about_img05.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* *************************************      */}
      <div className="bg-[#edf6f9] borde-2 py-16">
        <div className="   w-[96%] mx-auto  borde borde-black">
          <div className="flex">
            <div className=" mx-auto py-2">
              <p className="bg-blue-100 w-60 py-1 rounded-sm text-lblue ">
                Worldwide Our Achievement
              </p>
              <h2 className=" font-bold  w-80">
                Grow You <span className="text-lblue"> Skills</span> To Advance
                Your Career Path
              </h2>
            </div>
          </div>
          <div className="sm:flex flex-wrap justify-center items-center gap-3 p-2 ">
            <div className="sm:w-[23%] border shadow-md rounded-md">
              <div>
                <img
                  className="mx-auto py-4"
                  src="https://ifingerstudio.com/eduvalt/wp-content/uploads/2023/07/icon-1.png"
                  alt=""
                />
              </div>
              <h3 className="text-center">325,200</h3>
              <p className="text-center">Students Enrolled</p>
            </div>

            <div className="sm:w-[23%] border shadow-md rounded-md">
              <div>
                <img
                  className="mx-auto py-4"
                  src="https://ifingerstudio.com/eduvalt/wp-content/uploads/2023/07/icon-2.png"
                  alt=""
                />
              </div>
              <h3 className="text-center">325,200</h3>
              <p className="text-center">Students Enrolled</p>
            </div>

            <div className="sm:w-[23%] border shadow-md rounded-md">
              <div>
                <img
                  className="mx-auto py-4"
                  src="	https://ifingerstudio.com/eduvalt/wp-content/uploads/2023/07/icon-3.png"
                  alt=""
                />
              </div>
              <h3 className="text-center">325,200</h3>
              <p className="text-center">Students Enrolled</p>
            </div>

            <div className="sm:w-[23%] border shadow-md rounded-md">
              <div>
                <img
                  className="mx-auto py-4"
                  src="https://ifingerstudio.com/eduvalt/wp-content/uploads/2023/07/icon-4.png"
                  alt=""
                />
              </div>
              <h3 className="text-center">325,200</h3>
              <p className="text-center">Students Enrolled</p>
            </div>
          </div>
        </div>
      </div>
      {/* ****************************************** */}
      <div className="   col-span-12 flex flex-col text-white gap-2 mt-3 text-center sm:flex  ">
        <div className=" -black sm:flex  sm:justify-between">
          <div className=" -black sm:w-[50%]">
            <div>
              <div className="  -black w-[55%] rounded-sm sm:w-[55%] mt-2   bg-[#e4ebf5] text-blue-700 sm:text-medium">
                Our Qualified People Matter
              </div>
            </div>
            <div className="">
              <h1 className="sm:w-[400px] sm:text-4xl   w-[300px] -2 mt-2  text-[#161057] text-3xl font-bold">
                Top
                <span className="text-blue-800 sm:text-4xl"> Class</span>{" "}
                Instructors{" "}
              </h1>
            </div>
          </div>
          <div className="mt-3 -black  w-[40%] flex items-center justify-end  m-auto ">
            <button className="sm:m-4 border-2 shadow-md rounded-lg p-[8px] hover:bg-[#0339fc] hover:text-white -1 -blue-700 text-blue-800 text-center  font-medium  sm:font-medium sm:text-sm sm:w-[200px]   ">
              ALL INSTRUCTORS
            </button>
          </div>
        </div>

        <div className=" text-[#161057]   sm:flex sm:justify-center sm:gap-4 ">
          <div className="-2 -black sm:w-[23%]">
            <div className=" -black">
              <img
                className="m-auto"
                src="https://ifingerstudio.com/eduvalt/wp-content/uploads/2023/07/instructor01.png"
                alt=""
              />
            </div>
            <div className="flex ml-8 mt-2   items-center">
              <p className=" mb-0">graphic designer</p>
            </div>
            <div className="flex ml-8 ">
              <h4 className="mb-4">Rober Smith</h4>
            </div>
          </div>
          <div className=" -black sm:w-[23%]">
            <div className=" -black">
              <img
                className="m-auto"
                src="https://ifingerstudio.com/eduvalt/wp-content/uploads/2023/07/instructor02.png"
                alt=""
              />
            </div>
            <div className="flex ml-8 mt-2   items-center">
              <p className=" mb-0">Web Designer</p>
            </div>
            <div className="flex ml-8 ">
              <h4 className="mb-4">Olivia Mia</h4>
            </div>
          </div>
          <div className=" -black sm:w-[23%]">
            <div className=" -black">
              <img
                className="m-auto"
                src="https://ifingerstudio.com/eduvalt/wp-content/uploads/2023/07/instructor03.png"
                alt=""
              />
            </div>
            <div className="flex ml-8 mt-2   items-center">
              <p className=" mb-0">Digital Marketer</p>
            </div>
            <div className="flex ml-8 ">
              <h4 className="mb-4">William Home</h4>
            </div>
          </div>
          <div className=" -black sm:w-[23%]">
            <div className=" -black">
              <img
                className="m-auto"
                src="https://ifingerstudio.com/eduvalt/wp-content/uploads/2023/07/instructor04.png"
                alt=""
              />
            </div>
            <div className="flex ml-8 mt-2   items-center">
              <p className=" mb-0">Support Staff</p>
            </div>
            <div className="flex ml-8 ">
              <h4 className="mb-4">Rober Smith</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="   col-span-12 flex flex-col text-white gap-2 mt-3 text-center sm:flex  ">
        <div className=" -black sm:flex  sm:justify-between mx-4">
          <div className=" -black sm:w-[50%]">
            <div>
              <div className="  -black w-[55%] rounded-sm sm:w-[55%] mt-2   bg-[#e4ebf5] text-blue-700 sm:text-medium">
                feature event
              </div>
            </div>
            <div className="">
              <h1 className="sm:w-[400px] sm:text-4xl   w-[300px] -2   text-[#161057] text-3xl font-bold">
                Upcoming
                <span className="text-blue-800 sm:text-4xl"> Event</span>{" "}
              </h1>
            </div>
          </div>
          <div className="mt-3 -black  w-[40%] flex items-center justify-end  m-auto ">
            <button className="sm:m-4 border-2 shadow-md rounded-lg p-[8px] hover:bg-[#0339fc] hover:text-white -1 -blue-700 text-blue-800 text-center  font-medium  sm:font-medium sm:text-sm sm:w-[200px]   ">
              ALL INSTRUCTORS
            </button>
          </div>
        </div>
      </div>
      <div className="mx-4 flex gap-3">
        <div className="shadow-lg sm:w-[32%] flex flex-col rounded-lg  my-4 ">
          <a className="" href="">
            {" "}
            <img
              className="rounded-lg h-40 "
              src="https://ifingerstudio.com/eduvalt/wp-content/uploads/2023/06/blog_standard01.jpg"
              alt=""
            />
          </a>

          <div className="  flex">
            <a className="no-underline" href="">
              <h3 className="w-[] text-black text-wrap">
                Success Free Career & Meditation Classes
              </h3>
            </a>
          </div>
          <div className="flex ml-8 mt-1 text-slate-600 ">United Kingdom</div>
        </div>
        <div className="shadow-lg sm:w-[32%] flex flex-col rounded-lg  my-4 ">
          <a className="" href="">
            {" "}
            <img
              className="rounded-lg h-40 "
              src="	https://ifingerstudio.com/eduvalt/wp-content/uploads/2023/07/event01.jpg"
              alt=""
            />
          </a>

          <div className="  flex">
            <a className="no-underline" href="">
              <h3 className="w-[] text-black text-wrap">
                Aewe Creating Futures Through Technology{" "}
              </h3>
            </a>
          </div>
          <div className="flex ml-8 mt-1 text-slate-600 ">United Kingdom</div>
        </div>
        <div className="shadow-lg sm:w-[32%] flex flex-col rounded-lg  my-4 ">
          <a className="" href="">
            {" "}
            <img
              className="rounded-lg h-40 "
              src="https://ifingerstudio.com/eduvalt/wp-content/uploads/2023/07/event02.jpg"
              alt=""
            />
          </a>

          <div className="  flex">
            <a className="no-underline" href="">
              <h3 className="w-[] text-black text-wrap">
                Exactly How Technology Can Make Reading{" "}
              </h3>
            </a>
          </div>
          <div className="flex ml-8 mt-1 text-slate-600 ">United Kingdom</div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
{
  /* <div className="flex sm:h-60 h-44    items-center">
     <div className=" ">
       <h3 className="mt-2 font-bold text-4xl">Courses</h3>
       <div className="mt-4  ">
         <a className="no-underline text-white" href="#">
           <span className="text-xl">Eduvalt</span>
         </a>
         <i class="fa-solid p-1 fa-chevron-right"></i>
         <span className="px-2 text-xl">Courses</span>
       </div>
     </div>
   </div> */
}

//     <div className=" text-white   ">
//       <div className=" bg-slate-800 sm:h-72  ">
//         <div className="flex sm:h-60 h-44    items-center">
//           <div className=" sm:w-2/3 w-3/4 ml-[4%] ">
//             <h3 className="mt-2 font-bold text-4xl">About Us</h3>
//             <div className="mt-4  ">
//               <a className="no-underline text-white" href="#">
//                 <span className="text-xl">Eduvalt</span>
//               </a>
//               <i class="fa-solid p-1 fa-chevron-right"></i>
//               <span className="px-2 text-xl">About Us</span>
//             </div>
//           </div>
//         </div>
//         *************************************
//         <div>
//           <div className=" bg-gray-400  ">
//             <div className="  py-20 border ">
//               <div className=" grid grid-cols-12 gap-4">
//                 <div className="sm:col-span-5 sm:border col-span-12">
//                   <div className="py-2">

//                       <p className="bg-blue-200 text-lblue w-[120px] rounded-sm text-center">Who we are</p>
//                       <h2 className="text-dblue font-bold">
//                         The Leading Global <span>Marketing</span> For Learning
//                         And Instruction{" "}
//                       </h2>

//                     <p className="text-slate-500">
//                       Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                       Explicabo animi, error odio magni assumenda et sed quidem
//                       fuga iste, .
//                     </p>

//                     <p className="text-slate-500">
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                       Quam placeat animi temporibus deleniti ipsa earum libero,
//                       autem laboriosam dolore iure corrupti alias quidem quod
//                       dicta beatae.{" "}
//                     </p>
//                     <div>
//                       <a href="">
//                         <button>Explore Courses</button>
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="sm:col-span-7 sm:border col-span-12">
//                   <div>
//                     <img src="" alt="" />
//                   </div>

//                   <div className='sm:flex gap-3'>
//                     <div className="w-[50%] border ">
//                       <img className="" src="" alt="" />
//                     </div>
//                     <div className="w-[50%] border h-36">
//                       <div>
//                      <img className="h-16" src="" alt="" />
//                       <img className="h-16 border" src="" alt="" />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>{" "}
//             </div>
//           </div>{" "}
//         </div>
//         <div>
//           <div className=" bg-green-600  ">
//             <div className="  py-20 border ">
//               <div className=" grid grid-cols-12 gap-4">
//                 <div className="border col-span-12">
// <div className="flex  justify-center border">
// <div className="flex flex-col">
// <div className="text-center">
// <p className="mb-2 bg-blue-300">Worldwide Our Achievement</p></div>
// <div><h2>ffffffffffffffffffffffffffffffffffffffffff</h2></div>
// </div>
// <div>

// </div>
// </div>
// <div className="grid grid-cols-4 gap-2">
// <div className="h-40 border">1</div>
// <div className="h-40 border">1</div>
// <div className="h-40 border">1</div>
// <div className="h-40 border">1</div>
// </div>
//                 </div>
//               </div>{" "}
//             </div>
//           </div>{" "}
//         </div>
//         <div>
//           <div className=" bg-gray-400  ">
//             <div className="  py-20 border ">
//               <div className=" grid grid-cols-12 gap-4">
//                 <div className="border col-span-12 ">

//                 </div>
//               </div>{" "}
//             </div>
//           </div>{" "}
//         </div>
//         <div>

//           <div className=" bg-gray-400  ">
//             <div className="  py-20 border ">
//               <div className=" grid grid-cols-12 gap-4">
//                 <div className="sm:col-span-4 sm:border col-span-12"></div>
//               </div>{" "}
//             </div>
//           </div>{" "}
//         </div>
//         <div>
//           <div className=" bg-gray-400  ">
//             <div className="  py-20 border ">
//               <div className=" grid grid-cols-12 gap-4">
//                 <div className="sm:col-span-4 sm:border col-span-12"></div>

//                 <div className="sm:col-span-4 sm:border col-span-12">
//                   <div className="sm:flex">
//                     <div>
//                       <img src="" alt="" />
//                     </div>
//                     <div>
//                       <img src="" alt="" />
//                     </div>
//                   </div>
//                 </div>
//               </div>{" "}
//             </div>
//           </div>{" "}
//         </div>
//       </div>{" "}
//     </div>
