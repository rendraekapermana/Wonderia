import { Outlet } from "react-router-dom"; // Import Outlet

import Navbar from "../components/Navbar";

const MainLayout = () => {
    return (
        <>
        {/* <Navbar /> */}
        <Outlet />

        </>
    )
}

export default MainLayout;
