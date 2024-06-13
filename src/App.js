import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import RouteError from "./components/RouteError";
import RestaurantDetail from "./components/RestaurantDetail";
import useOnlineStatus from "./utils/useOnlineStatus";
import Offline from "./components/Offline";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const onlineStatus = useOnlineStatus();
  return (
    <div>
      {onlineStatus ? (
        <>
          <Header />
          <Outlet />
        </>
      ) : (
        <Offline />
      )}
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h2>Loading...</h2>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantDetail />,
      },
    ],
    errorElement: <RouteError />,
  },
]);
root.render(<RouterProvider router={appRouter} />);
