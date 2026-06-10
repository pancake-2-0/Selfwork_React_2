import { createBrowserRouter } from "react-router";
import Homepage from "../views/Homepage";
import Layout from "../components/Layout";
import Posts from "../views/Posts";
import Details from "../views/Details";

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
    ],
  },
]);

export default router;
