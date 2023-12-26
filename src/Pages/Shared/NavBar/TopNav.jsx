import { Navbar, } from "keep-react";
import { NavLink } from "react-router-dom";
const TopNav = () => {
    return (
        <div className="px-10 py-6">
            <Navbar fluid={true}>
      <Navbar.Container className="flex items-center justify-between">
        <Navbar.Container className="flex items-center">
          
          <Navbar.Divider></Navbar.Divider>
          <Navbar.Container
           
            className="lg:flex hidden items-center justify-between gap-8"
          >
           
            <NavLink to='/' >Home</NavLink>
            <NavLink to='/media' >Media</NavLink>
            <NavLink to='/about' >About</NavLink>
           
           
          </Navbar.Container>
          <Navbar.Collapse collapseType="sidebar">
            <Navbar.Container  className="flex flex-col gap-5">
            <NavLink to='/' >Home</NavLink>
            <NavLink to='/media' >Media</NavLink>
            <NavLink to='/about' >About</NavLink>
            </Navbar.Container>
          </Navbar.Collapse>
        </Navbar.Container>

        <Navbar.Container className="flex gap-2">
         
          <button>Login</button>
          <Navbar.Toggle />
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
        </div>
    );
};

export default TopNav;