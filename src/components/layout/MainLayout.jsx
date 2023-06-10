import { Outlet } from "react-router-dom";
import Home from "../pages/homePage/home/Home";
import Footer from "../shared/footer/Footer";
import Header from "../shared/header/Header";

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <div>
            <Outlet></Outlet>
            <Home></Home>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;