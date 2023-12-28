import { Navbar, } from "keep-react";
import { Link, NavLink } from "react-router-dom";
import  { useContext } from "react";
import { AuthContext } from "../../../Component/Provider/AuthProvider";


const TopNav = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut();
  };


    return (
        <div className=" ">
            <Navbar className="bg-green-500  text-xl text-white" fluid={true}>
      <Navbar.Container className="flex items-center justify-between px-10 py-6">
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
        {user ? (
              <div className=" flex gap-5">
                 <button className="btn btn-md btn-outline text-white" onClick={handleLogout}>Logout</button>
                <img
                  title={user.displayName}
                  className="rounded-full w-10 h-10"
                  src={user?.photoURL}
                />
                
              </div>
            ) : (
              <Link to="/login">
                <button className="btn btn-md btn-outline text-white">Login</button>
              </Link>
            )}
         
          <Navbar.Toggle />
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
        </div>
    );
};

export default TopNav;