import { Outlet } from "react-router-dom";
import TopNav from "../../Pages/Shared/NavBar/TopNav";

const Main = () => {
    return (
        <div>
            <TopNav></TopNav>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;