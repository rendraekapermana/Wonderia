import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import DetailTicket from "./pages/DetailTicket";
import Register from "./pages/Register";
import Cart from "./pages/Cart";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* Routes dengan Layout */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path ="/DetailTicket" element={<DetailTicket />} />
          <Route path ="/Cart" element={<Cart />} />
        </Route>

        {/* Routes tanpa Layout */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
