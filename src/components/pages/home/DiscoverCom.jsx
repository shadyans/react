import React from "react";
import Person4OutlinedIcon from "@mui/icons-material/Person4Outlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import OndemandVideoOutlinedIcon from "@mui/icons-material/OndemandVideoOutlined";

function DiscoverCom() {
  return (
    <div className=" grid grid-cols-12 -2 -black h-auto mt-5">
      <div className=" relative sm:col-span-6  col-span-12 flex flex-col items-center">
        <div className=" ">
          <div className=" absolute top-3 left-[45%]">
            <img
              className="h-16  m-auto "
              src="https://ifingerstudio.com/eduvalt/wp-content/themes/eduvalt/assets/img/others/about_dots.svg"
              alt=""
            />
          </div>

          <img
            className="mt-10 sm:relative"
            src="https://ifingerstudio.com/eduvalt/wp-content/uploads/2023/07/about_img01.png"
            alt=""
          />
          {/* <img className="none sm:absolute" src="https://ifingerstudio.com/eduvalt/wp-content/uploads/2023/07/about_img02.png" alt="" /> */}
        </div>

        <div className="text-center sm:mb-20 sm:mr-8  text-white  h-[100px] w-[130px] rounded-lg shadow-slate-300 shadow-l bg-blue-800 absolute bottom-1 right-6  ">
          <div></div>
          <div className="text-2xl font-bold">12 +</div>
          <div>Year Of Experience</div>
        </div>
      </div>
      {/* 2nd row */}

      <div className="  sm:col-span-6  col-span-12 flex flex-col  mt-3 ">
        <div className="  mt-2 bg-[#e4ebf5] text-blue-700 sm:p-2 sm:font-semibold sm:text-xl">
          Get To know About Us
        </div>

        <div className="">
          <h1 className="   mt-2 text-blue-[#0a174a] text-3xl font-bold sm:text-4xl text-wrap">
            Discover Top <span className="text-blue-800">Instructors</span>{" "}
            Around The World{" "}
          </h1>
        </div>

        <div className=" text-wrap  mt-2 text-[#39557E] sm:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nihil
          ratione rem voluptate placeat. Ad consequuntur iusto magnam voluptatem
          odit ut assumenda itaque dolores! Accusamus deleniti laborum molestias
          architecto dolore?
        </div>

        <div className=" -1 -black col-span-6 flex flex-col  gap-2 mt-3 text-center">
          <div className="-1 -black mt-3 w-full  flex flex-wrap gap-4 sm:gap-y-6 sm:gap-x-6 justify-center">
            <div className="w-[45%] sm:h-20  flex justify-center items-center font-bold  gap-x-4">
              <div className="">
                <Person4OutlinedIcon sx={{ fontSize: [60] }} color="primary" />
              </div>

              <div className=" sm:text-xl font-bold text-slate-700 sm:p-">
                <div>2000</div>
                <div>Expert Tutors</div>
              </div>
            </div>
            <div className="w-[45%]  sm:h-20  flex justify-center items-center gap-x-8">
              <div className="">
                <LibraryBooksOutlinedIcon
                  sx={{ fontSize: [60] }}
                  color="primary"
                />
              </div>

              <div className="sm:text-xl font-bold text-slate-700 sm:p-">
                <div>1500</div>
                <div>Top lessons</div>
              </div>
            </div>
            <div className="w-[45%]  sm:h-20  flex justify-center items-center gap-x-8">
              <div className="">
                <SchoolOutlinedIcon sx={{ fontSize: [60] }} color="primary" />
              </div>

              <div className="sm:text-xl font-bold text-slate-700 sm:p-">
                <div>18000</div>
                <div>Over Students</div>
              </div>
            </div>
            <div className="w-[45%] sm:h-20  flex justify-center items-center gap-x-8">
              <div className="">
                <OndemandVideoOutlinedIcon
                  sx={{ fontSize: [60] }}
                  color="primary"
                />
              </div>

              <div className="sm:text-xl font-bold text-slate-700 sm:p-">
                <div>3200</div>
                <div>Pro Videos</div>
              </div>
            </div>
          </div>

          <div className="flex mt-2  ">
            <button className="px-6 rounded-md h-12 text-white text-sm font-medium bg-[#0729ad] sm:px-8 sm:text-xl">
              Discover More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiscoverCom;
