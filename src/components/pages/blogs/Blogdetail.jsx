import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
function Blogdetail() {
  return (
    <div className="  ">
      {" "}
      <div className="bread-crum  text-white bg-slate-700 h-60 bg-[url('Images/breadcrumb_bg.jpg')] bg-cover bg-center   ">
        <div className=" grid place-items-center bg-[rgba(19,19,48,0.7)] h-60">
          <div className=" w-[90%] mx-auto borde h-28 ">
            <h3 className="mt-2 font-bold text-4xl">Blog</h3>
            <div className="mt-4  ">
              <a className="no-underline text-white" href="#">
                <span className="text-xl">Eduvalt</span>
              </a>
              <i class="fa-solid p-1 fa-chevron-right"></i>
              <span className="px-2 text-xl">Blog</span>
            </div>
          </div>
        </div>
      </div>
      {/* *2nd************************ */}
      <div className="py-16">
        <div className="sm:flex gap-4  sm:w-[93%] mx-auto w-[96%]">
          <div className="sm:w-[60%] rounded-t-md">
            <div className="">
              <img className="rounded-t-md"
                src="	https://ifingerstudio.com/eduvalt/wp-content/uploads/2023/06/blog_standard02.jpg"
                alt=""
              />
            </div>
            <div className=" p-2 text-slate-600 ">
              <span>
                <PersonIcon sx={{ fontSize: 23 }} />
              </span>{" "}
              <span className="font-medium">Eduvalt</span>
              <span className="pl-4">
                <CalendarMonthIcon sx={{ fontSize: 23 }} />
              </span>{" "}
              <span className="font-medium">June 22 2023</span>
              <span className="pl-4">
                <ChatBubbleOutlineOutlinedIcon sx={{ fontSize: 23 }} />
              </span>{" "}
              <span className="font-medium">Eduvalt</span>
            </div>
            <p className="text-wrap my-4">
              Horem ipsum dolor sitter metting Great consectetur adipiscing
              idealorem ipsum dolor sitter mettingtablished of a page when
              lookinThe point of using Lorem Ipsu ss normal distribution.est,
              qui dolor emr ipsum quia dolor sit ame consec tetur. Esse mo
              lestie consequat, vel illum dolore eu feugiat nulla facilisis at
              vero eros et ac cumsan et iusto odio dignissim qui blandit
              praesent consectetur adipiscing idealorem.
            </p>
            <div className=" border-l-8 border-blue-600 bg-blue-100">
              <p className="p-5 font-bold text-xl text-slate-600">
                “urabitur varius eros rutrum consequat Mauris sollicitudin enim
                condimentum luctus enim justo non molestie nisl ”
              </p>
            </div>
            <h1 className="font-bold">During this program</h1>
            <p className="leading-loose text-wrap">
              Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion
              consectetur elit. Vesti at bulum nec odio aea the dumm ipsumm
              ipsum that dolocons rsus mal suada and fadolorit.
            </p>
            <div className="sm:flex flex-wrap gap-x-16 ">
              <div>
                <CheckCircleOutlinedIcon sx={{ color: "blue", fontSize: 30 }} />
                <span className=" mt-1 text-lg text-slate-600 font-medium">
                  Become a UX designer.
                </span>
              </div>
              <div>
                <span className="sm:hidden">
                  <CheckCircleOutlinedIcon
                    sx={{ color: "blue", fontSize: 30 }}
                  />
                </span>
                <span className=" mt-1 text-lg text-slate-600 font-medium">
                  Become a UX designer.
                </span>
              </div>
              <div>
                <span className="">
                  <CheckCircleOutlinedIcon
                    sx={{ color: "blue", fontSize: 30 }}
                  />
                </span>
                <span className=" mt-1 text-lg text-slate-600 font-medium">
                  Become a UX designer.
                </span>
              </div>
              <div>
                <span className="sm:hidden">
                  <CheckCircleOutlinedIcon
                    sx={{ color: "blue", fontSize: 30 }}
                  />
                </span>
                <span className=" mt-1 text-lg text-slate-600 font-medium">
                  Become a UX designer.
                </span>
              </div>
              <div>
                <span>
                  <CheckCircleOutlinedIcon
                    sx={{ color: "blue", fontSize: 30 }}
                  />
                </span>
                <span className=" mt-1 text-lg text-slate-600 font-medium">
                  Become a UX designer.
                </span>
              </div>

              <p className="my-3 ">
                Horem ipsum dolor sitter metting Great consectetur adipiscing
                idealorem ipsum dolor sitter mettingtablished of a page when
                lookinThe point of using Lorem Ipsu ss normal distribution.est,
                qui dolor emr ipsum quia dolor sit ame consec tetur. Esse mo
                lestie consequat, vel illum dolore eu feugiat nulla facilisis at
                vero eros et ac cumsan et iusto odio dignissim qui blandit
                praesent consectetur adipiscing idealorem.
              </p>
              <div className="border-t-2 border-b-2">
                <div className="py-10">
                  <ul className="flex gap-3">
                    <h4>Tags :</h4>
                    <li className="p-1 bg-blue-100">learning</li>
                    <li className="p-1 bg-blue-100">Programming</li>
                  </ul>
                  <ul className="flex gap-3">
                    <h4>Social Share :</h4>
                    <span>
                      <FacebookOutlinedIcon />
                    </span>
                    <span>
                      <InstagramIcon />
                    </span>
                    <span>
                      <TwitterIcon />
                    </span>
                  </ul>
                  <div></div>
                </div>
              </div>

              <div className="border shadow-lg rounded-md mt-2">
                <div className="borde">
                  <h5 className="text-dblue font-bold px-3 my-2">
                    leave A Reply
                  </h5>
                  <p className="">
                    Your email address will not be published. Required fields
                    are marked *
                  </p>

                  <div className="sm:flex gap-x-4 gap-y-6 flex-wrap borde p-3">
                    <input
                      className="sm:w-[48%] w-[98%] mt-2 px-3 py-2 outline-none border-1 border-slate-600 rounded-md"
                      type="text"
                      placeholder="Enter Name"
                    />
                    <input
                      className="sm:w-[48%] w-[98%] mt-2 px-3 py-2 border-1 border-slate-600 rounded-md outline-none"
                      type="email"
                      placeholder="Enter Email"
                    />
                    <input
                      className="sm:w-[98%] w-[98%] mt-2 px-3 py-2 outline-none border-1 border-slate-600 rounded-md"
                      type="password"
                      placeholder="Enter Website"
                    />
                  </div>
                  <div className="flex justify-center">
                    <textarea
                      className="resize border-1 border-slate-600 rounded-md w-[93%] h-28 outline-none p-1"
                      placeholder="Enter Your Comment"
                    ></textarea>
                  </div>
                  <button className="p-2 text-center text-white mx-4 my-3 text- rounded-md bg-lblue">
                    SEND MESSAGE
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="p-1">
          <TextField className="shadow-md "
      variant="outlined"
      placeholder="Search..."
      sx={{}}
      InputProps={{
        startAdornment: (
          <InputAdornment>
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
    <div className="py-10 border-1 shadow-lg mt-2 p-3">
        <h3>Categories</h3>
        <div className="h-2 w-[13%] bg-lblue rounded-lg"></div>
        <div className="flex justify-between mt-2">
            <p>Art & Design</p>
            <p>1</p>
        </div>
        <div className="flex justify-between">
            <p>Business</p>
            <p>1</p>
        </div>
        <div className="flex justify-between">
            <p>data Science</p>
            <p>1</p>
        </div>
        <div className="flex justify-between">
            <p>Finance</p>
            <p>1</p>
        </div>
    </div>
    <div className="py-10 border-1 shadow-lg mt-4 p-3">
        <h3 className="">Recent Post</h3>
        <div className=" h-2 w-[13%]  border-black bg-lblue rounded-lg"></div>
        <div className="flex justify-evenly mt-4 gap-2">
           <a href=""> <p><img className="h-20 w-28"  src="	https://ifingerstudio.com/eduvalt/wp-content/uploads/2023/06/blog_standard01.jpg"
                alt=""/></p></a>
            <p>when aeunkno printer took galley of scrambled</p>
        </div>
        <div className="flex justify-evenly mt-4">
           <a href=""> <p><img className="h-20 w-28"  src="	https://ifingerstudio.com/eduvalt/wp-content/uploads/2023/06/blog_standard03-150x150.jpg"
                alt=""/></p></a>
            <p>when aeunkno printer took galley of scrambled</p>
        </div>
        <div className="flex justify-evenly mt-4">
            <a href=""><p><img className="h-20 w-28"  src="	https://ifingerstudio.com/eduvalt/wp-content/uploads/2023/06/blog_standard02.jpg"
                alt=""/></p></a>
            <p>when aeunkno printer took galley of scrambled</p>
        </div>
        <div className="flex justify-evenly mt-4">
           <a href=""> <p><img className="h-20 w-28"  src="	https://ifingerstudio.com/eduvalt/wp-content/uploads/2023/06/blog_standard04-150x150.jpg"
                alt=""/></p></a>
            <p>when aeunkno printer took galley of scrambled</p>
        </div> 
        </div>

        <div className="mt-4 border py-10 shadow-md p-3">
        <h3>Popular Tags</h3>
        <div className="h-2 w-[13%]  bg-lblue rounded-lg"></div>
         <div className=" w-[95%] mx-auto mt-4">
            <div className="flex gap-3 flex-wrap ">
            <p><a className="no-underline px-2 font-semibold py-1 rounded-sm bg-blue-300" href="">Apps</a></p>
            <p><a className="no-underline px-2 font-semibold py-1 rounded-sm bg-blue-300" href="">Arts & Design</a></p>
            <p><a className="no-underline px-2 font-semibold py-1 rounded-sm bg-blue-300" href="">Courses</a></p>
            <p><a className="no-underline px-2 font-semibold py-1 rounded-sm bg-blue-300" href="">Learning</a></p>
            <p><a className="no-underline px-2 font-semibold py-1 rounded-sm bg-blue-300" href="">Programming</a></p>
            <p><a className="no-underline px-2 font-semibold py-1 rounded-sm bg-blue-300" href="">UI/UX</a></p>
            <p><a className="no-underline px-2 font-semibold py-1 rounded-sm bg-blue-300" href="">Video</a></p>
            
            </div>
         </div>
        </div>
        <div className="py-8 shadow-lg mt-4 p-3">
        <h3>Recent Comments</h3>
        <div className="h-2 w-[13%]  bg-lblue rounded-lg"></div> 
        <p className="py-4">No comments to show</p>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogdetail;
