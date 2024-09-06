import React,{useEffect, useState,} from 'react'
import axios from "axios";

import  {useParams} from "react-router-dom"
// import {useNavigate} from "react-router-dom"
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FacebookIcon from '@mui/icons-material/Facebook';
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
function CourseDetail() {
  const [feature, setFeature] = useState({});
  console.log("feature",feature)
  // const [path,setPath]= useState("")
  const {course_id}=useParams()
    useEffect(() => {
      axios
        // .get('http://localhost:8001/get-Feature/${course_id}')
        .get(`http://localhost:8001/get-Feature/${course_id}`)

        .then((res) => {
          console.log(res.data.data);
          setFeature(res.data.data)
          // setPath(res.data.filepath)
          // console.log(res.data.filepath)
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
    <>
    <div className='max-w-[1320px] bg-slate-400'>
      <div className=' border text-center  text-white h-12 grid  sm:grid-cols-2 md:sm:grid-cols-2 bg-[#122a73]'>
<div className='p-2 hidden sm:block border'>
  <span className='px-2'><AddLocationAltIcon/></span>
  <span className='px-2'>463 7th Ave, NY 10018, USA</span>
  <span className='px-2'>|</span>
  <span className='px-2'><MailOutlineIcon/></span>
  <span className='px-2'>Info@gmail.com</span>
</div>

<div className='p-2  border'> 
<span className='px-2'>Follow Us On:</span>
<span className='p-[3px]'><FacebookIcon/></span>
<span className='p-[3px]'><FacebookIcon/></span>
<span className='p-[3px]'><FacebookIcon/></span>
<span className='p-[3px]'><FacebookIcon/></span>
<span className='p-[3px]'><FacebookIcon/></span>
<span className='p-[3px]'><FacebookIcon/></span>

</div>

      </div>
      {/* details-sec */}
      <div className="details-sec  bg-[#0a0a38]  h-80">
          <div className='sm:w-[80%]  mx-auto p-4  border'>
              <div className="details-cont  text-white">
                <a className='no-underline border p-1 text-sm rounded-full bg-green-300 text-green-700 ' href="">{feature?.category?.categoryName}</a>
                <h2 className='mt-3 font-semibold'>{feature.title}</h2>
                <p className='text-wrap'>Learn How To Build The Perfect Diet & Meal Plan For Improved Health, Better Weight Loss And…
                </p>

                <ul className='border flex
                mt-4 gap-x-4 items-center'>
                  <li ><div className='flex no-underline items-center gap-3'><a  href=""><img  className="h-12 w-12  rounded-3xl" src="../Images/author_img-150x150.png" alt="" /></a><a className='no-underline' href="">Eduvalt</a></div></li>
                  <li className='text-slate-400'><ImportContactsIcon/><span className='p-1'>6</span></li>
                  <li className='text-slate-400'><WatchLaterOutlinedIcon/><span className='p-1'>3h 30m</span></li>
                  <li className='text-slate-400'><PeopleOutlineOutlinedIcon/><span className='p-1'>16</span></li>
                  
                </ul>
              
              </div>
          </div>
      </div>
      {/* videos sec */}
      <div className=' bg-white grid items-center py-28'>
        <div className='w-[75%] h-[400px] mx-auto boder  border-black'>
          <iframe className='h-[100%] w-[100%]' src="https://www.youtube.com/embed/1SZle1skb84?si=IsOB95x-ctmvRS0l" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>"
        </div>
        {/* ******************************************* */}
      <ul className='flex flex-wrap gap-y-3 justify-self-start  w-[75%] borer-2  mx-auto mt-4'>
        <li className='px-2 border'><a className='no-underline text-xl font-semibold' href="">Course Info</a></li>
        <li className='px-2'><a className='no-underline text-xl font-semibold' href="">Curriculam</a></li>   
        <li className='px-2'><a className='no-underline text-xl font-semibold' href="">Reviews</a></li>
        <li className='px-2'><a className='no-underline text-xl font-semibold' href="">Annoouncements </a></li>
      </ul>
  {/* ******************************************* */}
      <div className=' w-[75%]  mx-auto py-10'>
      
      <div>
          <p className='leading-7 text-slate-500'><strong className='text-slate-600'>Are you new to PHP or need a refresher?</strong> Then this course will help you get all the fundamentals of Procedural PHP, Object Oriented PHP, MYSQLi and ending the course by building a CMS system similar to WordPress, Joomla or Drupal. <br />
<strong className='text-slate-600' >Knowing PHP has allowed me to make enough money to stay home and make courses like this one for students all over the world.</strong> Being a PHP developer can allow anyone to make really good money online and offline, developing dynamic applications. <br />
Knowing <strong className='text-slate-600'>PHP</strong> will allow you to build web applications, websites or Content Management systems, like WordPress, Facebook, Twitter or even Google. <br />
<strong className='text-slate-600'>There is no limit to what you can do with this knowledge.</strong> PHP is one of the most important web programming languages to learn, and knowing it, will give you <strong>SUPER POWERS</strong> in the web development world and job market place. <br />
<strong className='text-slate-600'>Why?</strong> <br />
Because Millions of websites and applications (the majority) use PHP. You can find a job anywhere or even work on your own, online and in places like freelancer or Odesk. You can definitely make a substantial income once you learn it. <br />
<strong className='text-slate-600'>I will not bore you</strong> 🙂 <br />
I take my courses very seriously but at the same time I try to make it fun since I know how difficult learning from an instructor with a monotone voice or boring attitude is. This course is fun, and when you need some energy to keep going, you will get it from me. br

<strong className='text-slate-600'>My Approach</strong> <br />
Practice, practice and more practice. Every section inside this course has a practice lecture at the end, reinforcing everything with went over in the lectures. I also created a small application the you will be able to download to help you practice PHP. To top it off, we will build and awesome CMS like WordPress, Joomla or Drupal.</p>
        </div>
        <div className=''>
        <div className='mt-4'>
          <span className='text-slate-500 text-2xl p-2 font-semibold'>+</span>
          <span className='text-slate-500 font-semibold'>Show More</span>

        </div></div>
 <div className='mt-3 '>
  <h5 className='font-bold'>What Will You Learn?</h5>
 </div>
 <div className='border-t-2 mt-2'>
<div className='mt-2'>
<ul className=' gap-4 sm:grid grid-cols-2 sm:text-start '>
  <li><i class="fas fa-check-circle text-blue-700 px-1"></i>Understand the fundamentals of healthy dieting (calories, protein, carbs, fat, vitamins & minerals)
  </li>
  <li><i class="fas fa-check-circle text-blue-700 px-1"></i>Create a diet that is perfect for your needs and lifestyle
  </li>
  <li><i class="fas fa-check-circle text-blue-700 px-1"></i>Learn when, what and how much you should eat for optimal body composition
  </li>
  <li><i class="fas fa-check-circle text-blue-700 px-1"></i>Build more muscle by optimizing your meal plan
  </li>
  <li><i class="fas fa-check-circle text-blue-700 px-1"></i>Lose fat faster by optimizing your meal plan
  </li>
  <li><i class="fas fa-check-circle text-blue-700 px-1"></i>Improve immunity and energy levels with the right vitamins and minerals
  </li>
</ul>
</div>
 </div>
 <div className='border mt-8 py-10 px-8 bg-slate-100 rounded-lg'>
<h4 className='font-bold py-2'>Free</h4>
<button className='border bg-blue-700 text-center sm:px-36 px-20  py-2 rounded-md  text-white font-semibold'>Enroll Now</button>
<p className='py-2'>Free access this course</p>
 </div>
 <div className='p-8 border'>
 <div><span className='px-2'><i class="fas fa-chart-simple text-lg"></i></span><span className='text-xl px-1'>All Levels</span></div>
 <div><span className='px-2'><i class="fas fa-graduation-cap text-lg"></i></span><span className='text-xl px-1'>All Levels</span></div>
 <div><span className='px-2'><i class="fas fa-clock text-lg"></i></span><span className='text-xl px-1'>All Levels</span></div>
 <div><span className='px-2'><i class="fas fa-arrows-spin text-lg"></i></span><span className='text-xl px-1'>All Levels</span></div>
 </div>
<div className='grid sm:grid-cols-2 grid-cols-[70%_auto] border border-black mt-8'>
  <div className='p-2'><p>Top Course</p><h1>More Courses By Eduvalt
  </h1></div>
  <div className='flex items-center justify-end p-3'> 
    <a href=""> <button className='bg-blue-600 text-white px-16 py-2 rounded-lg font-semibold'>View All Course </button></a>
  </div>

</div>
<div className='grid sm:grid-cols-2 shadow-md border text-center gap-3'>
     <div className='border rounded-lg p-2'></div>
     <div className='border rounded-lg'>hhhhhhhhhhh</div>
  </div>
 <div>

 </div>
      </div>
      
      
      </div>
    </div>
    </>
  )
}

export default CourseDetail