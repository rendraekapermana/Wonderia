import { Outlet } from "react-router-dom"; // Import Outlet

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <>
        <Navbar />
        <Footer />
        <Outlet />

        </>
    )
}

export default MainLayout;
