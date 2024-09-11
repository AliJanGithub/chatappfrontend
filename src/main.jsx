import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import { AuthProvider } from "../UserContext";
import Login from "./compo/Login";
import Signup from "./compo/SIgnup";
import Chat from "./compo/Chat";
import Chats from "./compo/Chats";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/chats",
    element: <Chats />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
      <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </AuthProvider>

);