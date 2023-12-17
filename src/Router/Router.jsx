import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Services from "../Pages/Services";
import SingleService from "../Pages/SingleService";
import MySchedule from "../Pages/MySchedule";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AddService from "../Pages/Dashboard/AddService";
import UpdateService from "../Pages/Dashboard/UpdateService";
import ManageServices from "../Pages/Dashboard/ManageServices";
import Profile from "../Pages/Dashboard/Profile";
import ManageUser from "../Pages/Dashboard/ManageUser";
import State from "../Pages/Dashboard/State";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "services",
        element: <Services></Services>,
      },
      {
        path: "SingleServices/:id",
        element: <SingleService></SingleService>,
      },
      {
        path: "mySchedule",
        element: <MySchedule></MySchedule>,
      },
    ],
  },
  {
    path: "login",
    element: <Login></Login>,
  },
  {
    path: "register",
    element: <Register></Register>,
  },
  // Dashboard route
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      { path: "addService", element: <AddService></AddService> },
      { path: "updateService/:id", element: <UpdateService></UpdateService> },
      { path: "manageServices", element: <ManageServices /> },
      { path: "profile", element: <Profile /> },
      { path: "manageUser", element: <ManageUser></ManageUser> },
      { path: "state", element: <State /> },
    ],
  },
]);
