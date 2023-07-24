import { createBrowserRouter } from "react-router-dom";
import Signup from "../Pages/Signup/Signup";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home/Home";
import Main from "../layout/Main";
import Error from "../Pages/Error/Error";
import Admissionviewinfo from "../Pages/Home/Admissionviewinfo/Admissionviewinfo";
import Admission from "../Pages/Admission/Admission";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/singup",
        element: <Signup></Signup>,
      },
      {
        path: "/admission",
        element: <Admission></Admission>,
      },
      {
        path: "/admissonDetail/:id", // This should match the route path in the Admissionviewinfo component
        element:<PrivateRoute><Admissionviewinfo></Admissionviewinfo></PrivateRoute>, 
        loader: ({ params }) =>
          fetch(`http://localhost:2000/admissonDetail/${params.id}`),
      },

    ]
  },
]);

export default router;