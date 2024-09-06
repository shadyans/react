import React from "react";
// #161057
function InstructorsCom() {
  // const imData = [
  //   {
  //     designation: "Graphic Designer",
  //     name: "Rober Smith",
  //     image: "../../../../public/Images",
  //   },
  //   {
  //     designation: "Web Designer",
  //     name: "Olivia Mia",
  //     image: "../../../../public/Images",
  //   },
  //   {
  //     designation: "Digital Marketer",
  //     name: "William Hope",
  //     image: "../../../../public/Images",
  //   },
  //   {
  //     designation: "Support Staff",
  //     name: "William Hope",
  //     image: "../../../../public/Images",
  //   },
  // ];
  return (
    <div className=" border-t  grid grid-cols-12  h-auto mt-5 ">
      {/* 1st row */}

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

        {/* 2nd row */}
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

      {/* 2ntd row */}
      <div className="  -1 -white   h-auto col-span-12  ">
        <div className="mt-5 ">
          <div className=" sm:rounded-lg text-white mx-3 bg-[#0373fc] gap-3  sm:m-8">
            <div className=" sm:mt-5  ">
              <div className="">
                <h1 className=" mx-3  font-bold">
                  Join Us & Spread Experiences
                </h1>{" "}
              </div>
              <div></div>
            </div>
            <div className=" mt-3 sm:w-[900px]  ">
              <div className="  mt-2 mx-3 sm:flex sm:justify-between sm:items-center ">
                <p className="mt-6  sm:w-[65%] text-wrap  font-medium  ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident facilis rerum nihil qui placeat voluptas, iste
                  pariatur! Doloribus, ea. Quos possimus impedit, cumque aliquid
                  eos aliquam suscipit eum ducimus quasi!
                </p>
                <div className=" font-bold rounded-lg mt-4">
                  <button className="p-3  rounded-sm px-5 bg-slate-50 text-[#161057] ">
                    Become An instructor
                  </button>
                </div>
                {/* <div className='  mt-2 ' >
          <button className='   font-md text-base sm:text-lg sm:font-medium'>Become An instructor
          </button>
        </div> */}
              </div>
            </div>
          </div>

          {/* <div className='-3 h-60  '>
            <div><div className=''><h1 className=' border mt-3    font-bold'>Join Us & Spread Experiences</h1></div>
            <div><p className='ml-2 mt-6 sm:w-[45%] border  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident facilis rerum nihil qui placeat voluptas, iste pariatur! Doloribus, ea. Quos possimus impedit, cumque aliquid eos aliquam suscipit eum ducimus quasi!</p></div></div>
        </div>
        <div><button className='p-2 ml-4 sm:w-[200px] font-md text-base sm:text-lg sm:font-medium'>Become An instructor</button></div> */}
        </div>

        {/* <div className=' bg-blue-600 border border-black w-[90%]   rounded-md h-[350px] sm:h-[250px] text-white mt-4 sm:flex'>
      <div className='mt-4    border border-black sm:gap-3 sm:justify-around'>
     <div className=' border border-black'> <h1 className=' border sm:w-[30%] ml-3  font-bold'>Join Us & Spread Experiences</h1>

<p className='ml-2 mt-6 sm:w-[45%] border  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident facilis rerum nihil qui placeat voluptas, iste pariatur! Doloribus, ea. Quos possimus impedit, cumque aliquid eos aliquam suscipit eum ducimus quasi!</p></div>

<div className='w-[240px] sm:w-[220px]  ml-2 border  mt-4 rounded-lg text-blue-950 sm:h-16 bg-white'>
  <button className='p-2 ml-4 sm:w-[200px] font-md text-base sm:text-lg sm:font-medium'>Become An instructor</button>
</div>
      </div>
   </div> */}
      </div>
    </div>
  );
}

export default InstructorsCom;
