import ErrorPage from "./ErrorPage";
import NewPost, { action as newPostAction } from "./routes/NewPost";
import Post, { action as postAction, destroyAction as postDestroyAction, loader as postLoader } from "./routes/Post";
import Root, { loader as rootLoader } from "./routes/Root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const router = createBrowserRouter(
  [
    { path: "/", element: <Root />, errorElement: <ErrorPage />, loader: rootLoader },
    { path: "/posts/new", element: <NewPost />, action: newPostAction },
    { path: "/posts/:id", element: <Post />, loader: postLoader, action: postAction },
    { path: "/posts/:id/destroy", action: postDestroyAction },
  ],
  { basename: "/ra16-homeworks-router-crud" },
);

export default function App() {
  return <RouterProvider router={router} />;
}
