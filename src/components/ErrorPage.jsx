import React from "react";
import { NavLink, useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {

  const error = useRouteError();
  const navigate = useNavigate();

  if (error.status === 404) {
    console.log(error);

    return (
      <div className=" font-bold flex justify-center flex-col">

        <p className="text-center pt-2">{error.error.message}</p>

        <div className="flex  justify-center">
          <img
            src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif"
            alt="404 page"
            className="w-[38rem]"
          />
        </div>

        <div className="text-center">
          <p className="pb-4">
             The page you were looking for could not be found
          </p>
          <button
            onClick={() => navigate(-1)}
            className=" p-2 bg-blue-700 rounded-2xl font-semibold text-white cursor-pointer "
          >
          GO Back to previous page
          </button>
        </div>
      </div>
    );
  }
};

export default ErrorPage;
