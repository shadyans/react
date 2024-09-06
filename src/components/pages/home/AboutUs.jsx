import React, { useEffect } from "react";
import "./styleAbout.css";
import axios from "axios";

function AboutUs() {
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
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8001/get-Features")
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  return (
    <div className=" grid grid-cols-12  h-auto  mt-5">
      <div className=" relative  -4 -green-500 bg-[#080a3d]    col-span-12 flex flex-col items-center">
        <div className="-2  w-full sm:flex">
          <div className="sm:w-[50%] ">
            <div className="m-4 relative -1 flex justify-center  -black">
              <img
                className="rounded-full sm:col-span-6"
                src="https://ifingerstudio.com/eduvalt/wp-content/uploads/2023/07/testimonial01.jpg"
                alt=""
              />

              <img
                className="absolute top-3 left-0 sm:top-6 sm:left-10"
                src="https://ifingerstudio.com/eduvalt/wp-content/uploads/2023/07/testi_shape01.svg"
                alt=""
              />

              <img
                className="absolute left-4 bottom-6 sm:left-28 animate-spin "
                src="https://ifingerstudio.com/eduvalt/wp-content/uploads/2023/07/testi_shape03.svg"
                alt=""
              />
              <img
                className="absolute  right-0 sm:right-20"
                src="https://ifingerstudio.com/eduvalt/wp-content/uploads/2023/07/testi_shape02.svg"
                alt=""
              />
            </div>
          </div>
          <div className="sm:w-[50%] -2 -black">
            <div className="m-4  -1 text-white  -black">
              <h1 className="text-4xl w-62  font-bold sm:text-5xl">
                What Our Students Say About Us
              </h1>
              <div className="mt-3">
                <img
                  className="h-12 sm:mt-8"
                  src="https://ifingerstudio.com/eduvalt/wp-content/themes/eduvalt/assets/img/icons/quote.png"
                  alt=""
                />
              </div>
              <div className="mt-3">
                {" "}
                <p className=" text-lg  sm:mt-8">
                  "whwen an unknown printer took a galley of type and scrambled
                  to make a type specimen book. It has survived nit only five
                  centuries, but also the leap into electronic"
                </p>
              </div>

              <div className="mt-5 ">
                <div className="sm:mt-8  w-12 rounded-md bg-yellow-400 h-[4px] flex items-center">
                  <hr className=" -1 -black" />
                </div>
              </div>

              <div className="mt-3 ">
                <div className="text-xl font-semibold sm:mt-8 ">
                  Cristina Luwis
                </div>
              </div>
              <p className="text-lg font-medium text-slate-500">
                Web Developer
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

 
