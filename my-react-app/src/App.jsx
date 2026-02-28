import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./components/Layout/AppLayout";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Products from "./Pages/Products";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <h1 className="error">404 Not Found!</h1>,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
     
      { path: "products", element: <Products /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);


const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
