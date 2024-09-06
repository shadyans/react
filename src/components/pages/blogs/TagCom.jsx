import React from 'react'
import PersonIcon from "@mui/icons-material/Person";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";

function TagCom() {
  return (
    <div className="  ">
      {" "}
      <div className="bread-crum  text-white bg-slate-700 h-60 bg-[url('Images/breadcrumb_bg.jpg')] bg-cover bg-center   ">
        <div className=" grid place-items-center bg-[rgba(19,19,48,0.7)] h-60">
          <div className=" w-[90%] mx-auto borde h-28 ">
            <h3 className="mt-2 font-bold text-4xl">Tag</h3>
            <div className="mt-4  ">
              <a className="no-underline text-white" href="#">
                <span className="text-xl">Eduvalt</span>
              </a>
              <i class="fa-solid p-1 fa-chevron-right"></i>
              <span className="px-2 text-xl">Tag</span>
            </div>
          </div>
        </div>
      </div>
      {/* *2nd************************ */}
      <div className="py-16">
        <div className="sm:flex gap-4  sm:w-[93%] mx-auto w-[96%]">
          <div className="sm:w-[60%] border-1 rounded-t-md">
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
            <button className="p-2 text-center text-white mx-4 my-3 text- rounded-md bg-lblue">
                    CONTINUE READING
                  </button>
       
    <div className="py-10 border-1 shadow-lg mt-2 p-3">
        <h3>Categories</h3>
        <div className="h-2 w-[20%] bg-lblue rounded-lg"></div>
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
        <div className=" h-2 w-[20%] border-1 border-black bg-lblue rounded-lg"></div>
        <div className="flex justify-evenly mt-4 gap-2">
            <p><img className="h-20 w-28"  src="	https://ifingerstudio.com/eduvalt/wp-content/uploads/2023/06/blog_standard02.jpg"
                alt=""/></p>
            <p>Full Stack GraphQL With Next.js And Vercel</p>
        </div>
        <div className="flex justify-evenly mt-4">
            <p><img className="h-20 w-28"  src="	https://ifingerstudio.com/eduvalt/wp-content/uploads/2023/06/blog_standard02.jpg"
                alt=""/></p>
            <p>Full Stack GraphQL With Next.js And Vercel</p>
        </div>
        <div className="flex justify-evenly mt-4">
            <p><img className="h-20 w-28"  src="	https://ifingerstudio.com/eduvalt/wp-content/uploads/2023/06/blog_standard02.jpg"
                alt=""/></p>
            <p>Full Stack GraphQL With Next.js And Vercel</p>
        </div>
        <div className="flex justify-evenly mt-4">
            <p><img className="h-20 w-28"  src="	https://ifingerstudio.com/eduvalt/wp-content/uploads/2023/06/blog_standard02.jpg"
                alt=""/></p>
            <p>Full Stack GraphQL With Next.js And Vercel</p>
        </div> 
        </div>

        <div className="mt-4 border py-10 shadow-md p-3">
        <h3>Popular Tags</h3>
        <div className="h-2 w-[20%]  bg-lblue rounded-lg"></div>
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
  )
}

export default TagCom