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

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* Routes dengan Layout */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>

        {/* Routes tanpa Layout */}
        <Route path="/login" element={<Login />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
