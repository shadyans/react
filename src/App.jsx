import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Appbar from "./components/Appbar";
import Home from "./components/pages/home/Home";

import ContactCom from './components/pages/about/ContactCom';
import AboutUs from "./components/pages/about/AboutUs";
import BlogCom from "./components/pages/home/BlogCom";
import FooterComp from "./components/FooterComp";
import CourseComp from "./components/pages/course/CourseComp";
import LoginCom from "./components/LoginCom";
import CourseDetail from "./components/pages/course/CourseDetail";
function App() {
  return (
    <>
      <Router>
        <Appbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/courses" element={<CourseComp />} />
          <Route path="/courses/business" element={<CourseComp />} />
          <Route path="/courses/design" element={<CourseComp />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<ContactCom />} />
          <Route path="/blog" element={<BlogCom />} />
          <Route path="/login" element={<LoginCom />} />
          <Route path="/corse-detail/:course_id" element={<CourseDetail/>} />

        </Routes>

        <FooterComp />
      </Router>
    </>
  );
}

export default App;
