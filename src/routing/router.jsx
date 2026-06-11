import { createBrowserRouter } from "react-router";
import Homepage from "../views/Homepage";
import Layout from "../components/Layout";
import Posts from "../views/Posts";
import Details from "../views/Details";
import Login from "../views/Login";
import Register from "../views/Register";
import { postsLoader, postDetailLoader } from "./loader";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "/",
        Component: Homepage,
      },
      {
        path: "/posts",
        Component: Posts,
        loader: postsLoader,
      },
      {
        path: "/posts/:id",
        Component: Details,
        loader: postDetailLoader,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
]);

export default router;
