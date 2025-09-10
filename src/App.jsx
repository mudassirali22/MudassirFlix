
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Movies from "./pages/Movies";
import Contact from "./pages/Contact";
import ErrorPage from "./components/ErrorPage";
import moviesDataApi from "./utils/moviesDataApi";
import Applayout from "./layout/Applayout";
import MoviesDetails from "./pages/MoviesDetails";
import { moviesDetailApi } from "./utils/movieDetailsApi";
import Login from "./pages/LoginForm";
import Signup from "./pages/SignUpForm";
import {signUpData} from "./utils/signUpData";
import { loginData } from "./utils/loginData";
import { contactForm } from "./utils/contactFormData";

  const router = createBrowserRouter([
    {
      path: "/", // parent layout
      element: <Applayout/>,
      errorElement: <ErrorPage />,
      children: [
        { 
          path: "/", 
          element: <Home /> 
        },
        { 
          path: "login", 
          element: <Login/>,
          action: loginData 
        },
        { 
          path: "signup", 
          element: <Signup />,
          action:signUpData
        },
        { 
          path: "about", 
          element: <About /> 
        },
        {
          path: "movies",
          element: <Movies />,
          loader: moviesDataApi,
        },
        { 
          path: "movies/:moviedetails",
          element: <MoviesDetails/>, 
          loader: moviesDetailApi
        },
        { 
          path: "contact",
           element: <Contact />,
          action: contactForm
        },
      ],
    },
  ]);

function App() { 
  return <RouterProvider router={router} />;
}

export default App;
