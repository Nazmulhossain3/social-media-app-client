import { Outlet } from "react-router-dom";
import TopNav from "../../Pages/Shared/NavBar/TopNav";
import Footer from "../../Pages/Footer/Footer";

const Main = () => {
    return (
        <div>
            <TopNav></TopNav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;