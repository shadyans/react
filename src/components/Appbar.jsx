import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { IconButton } from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
function NavScrollExample() {
  // const navigate = useNavigate();

  // const handleSelectChange = (event) => {
  //   const selectedValue = event.target.value;
  //   if (selectedValue) {
  //     navigate(selectedValue);
  //   }
  // };
  // const [category,setCategory]=useState([])
  // const [search,setSearch]=useState(" ")
  // useEffect(() => {
  //   axios
  //     .get('http://localhost:8001/get-catogories')
  //     .then((res) => {
  //       console.log(res.data.data);
  //       setCategory(res.data.data)
  //       category.filter((cat)=>{
  //         return cat && cat.categoryName && cat.categoryName.toLowerCase().include(search)
  //       })
       
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary sticky-top navbar">
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              className="h-12 w-30"
              src="https://ifingerstudio.com/eduvalt/wp-content/themes/eduvalt/assets/img/logo/logo.png"
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ height: "65px" }}
              navbarScroll
            >
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/courses">
                Courses
              </NavLink>
              {/* <NavLink className="nav-link" to="/corse-detail">Corse-Details</NavLink> */}
              <NavLink className="nav-link" to="/aboutus">
                About Us
              </NavLink>
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
              <NavLink className="nav-link" to="/blog">
                Blog
              </NavLink>
            </Nav>
            {/* <span className='mr-2 border-slate-400 border-1 p-[7px] px-3 rounded-md'>Category</span> */}
            <Form className="d-flex">
              <div className="p-2 border d-flex rounded-md mx-2 px-4 outline-none">
                <div className="px-1 ">
                  <GridViewIcon fontSize="small" color="primary" />
                </div>
                <div className="text-gray-600 ">
                  {

                  }
                  <select
                    className="outline-none"
                   // onChange={handleSelectChange}
                  >
                    <option value="/courses/business">Business</option>
                    <option value="/courses/design">Design</option>
                    <option value="/courses/development">Development</option>
                    <option value="/courses/marketing">Marketing</option>
                    <option value="/courses/photography">Photography</option>
                    <option value="/courses/fitness-health">
                      Fitness & Health
                    </option>
                  </select>
                </div>
              </div>
              <Form.Control
              //onChange={(e)=>setSearch(e.target.value)}
                type="search"
                //value={search}
                placeholder="Search For Course..."
                className="me-4"
                aria-label="Search"
              />
              <div className="h-6 w-1 mr-4 bg-slate-400 mt-2"></div>
              <div className="mr-4">
                {" "}
                <IconButton aria-label="shopping bag">
                  <ShoppingBagOutlinedIcon color="primary" fontSize="medium" />
                </IconButton>{" "}
              </div>
              <NavLink className="nav-link" to="/login">
                <Button className="px-4" variant="outline-success">
                  Login
                </Button>
              </NavLink>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavScrollExample;
