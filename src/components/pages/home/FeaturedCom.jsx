import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import axios from "axios";

function FeaturedCom() {
  const [features, setFeatures] = useState([]);
// const [path,setPath]= useState([])
  useEffect(() => {
    axios
      .get('http://localhost:8001/get-Features')
      .then((res) => {
        console.log(res.data.data);
        setFeatures(res.data.data)
        setPath(res.data.filepath)
        console.log(res.data.filepath)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const navigate =useNavigate()

  const getCat=(id)=>{
    // console.log("id",id)
    navigate(`/corse-detail/${id}`)
  }

  return (
    <div className=" borde-4 border-black bg-slate-100 grid grid-cols-12  h-auto mt-4 ">
      <div className=" borde-2 border-black  col-span-12      text-center m-2 ">
{/* Navigation  start  */}

        <div className="borde-1 border-black sm:flex justify-between ">
          <div>
            <div className=" text-blue-700 sm:text-lg sm:font-semibold sm:p-1">
              <p className="bg-[#e4ebf5] sm:w-[250px]">
                {" "}
                Welcome To Our Property
              </p>
            </div>

            <h1 className=" flex borde sm:p-2 sm:text-4xl text-[#161057] text-4xl font-bold">
              Our <span className="text-[#0027c2] ml-2"> Featured</span>{" "}
              <span className=" ml-2">Courses</span>
            </h1>
          </div>

          <div className="borde text-wrap sm:flex items-center">
            <a
              className="font-medium no-underline text-xl m-2 p-1 text-slate-700"
              href="#"
            >
              All Courses
            </a>
            <a
              className="font-medium no-underline text-xl m-2 p-1 text-slate-700"
              href="#"
            >
              Business
            </a>
            <a
              className="font-medium no-underline text-xl m-2 p-1 text-slate-700"
              href="#"
            >
              Design
            </a>
            <a
              className="font-medium no-underline text-xl m-2 p-1 text-slate-700"
              href="#"
            >
              Graphic Design
            </a>
            <a
              className="font-medium no-underline text-xl m-2 p-1 text-slate-700"
              href="#"
            >
              Marketing
            </a>
          </div>
        </div>
{/* Navigation  over */}


{/* Cards Start */}
        <div className="borde-2 border-black sm:flex-wrap sm:flex  sm:justify-center gap-y-8 mt-4  ">
         {
          features && features.map((elem,ind) => {
           return(
            <div key={ind} onClick={()=>getCat(elem._id)} className="border shadow-lg sm:w-[32%] w-[90%] m-auto  rounded-2xl  border-yellow-500 ">
            <div className="relative  ">
              <a href="#">
                <img
                  className="rounded-t-2xl "
                  // src={path +'/'+ elem.image}
                  src={`http://localhost:8001/uploads/features/${elem.image}`}
                  alt={elem.image}
                />
              </a>
              <div className="absolute text-xs font-semibold left-5 top-3 rounded-xl  p-1 hover:bg-green-300 bg-green-100  ">
                <a className="text-green-700 no-underline p-2" href="">
                  {elem.category.categoryName}
                </a>
              </div>
            </div>
            <div className="sm:flex text-slate-500 border-1  gap-2 mt-2">
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
            <div className="flex mx-1 mt-3">
              <a className="no-underline  text-black font-medium" href="">
               {elem.title}
              </a>
            </div>

            <div className="flex items-center gap-1 mt-2 mx-1">
              <span className="text-yellow-400">
                <StarOutlineIcon fontSize="small" />
              </span>
              <span className="text-yellow-400">
                <StarOutlineIcon fontSize="small" />
              </span>
              <span className="text-yellow-400">
                <StarOutlineIcon fontSize="small" />
              </span>
              <span className="text-yellow-400">
                <StarOutlineIcon fontSize="small" />
              </span>
              <span className="text-yellow-400">
                <StarOutlineIcon fontSize="small" />
              </span>

              <span className="text-slate-500">(7)</span>
            </div>

            <a className="no-underline " href="">
              <div className="border-t-[2px] mt-4 flex justify-between px-2 items-center">
                <div className="w-36 flex items-center gap-2">
                  <div className=" p-1 ">
                    <span>
                      <img
                        className="h-12  rounded-3xl"
                        src="./Images/author_img-150x150.png"
                        alt=""
                      />
                    </span>
                  </div>
                  <h5 className=" text-slate-600">Eduvalt</h5>
                </div>
                <div className=" p-1 text-lg font-semibold">Free</div>
              </div>
            </a>
          </div>
           )
          })
         }

         
        </div>
{/* Cards Start        */}
      </div>
    </div>
  );
}

export default FeaturedCom;