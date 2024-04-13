import {
  Home,
  Registration,
  SuccessReadPage,
  SuccessStories,
} from "components/features";
import React from "react";

type RouteType = {
  path: string;
  element: React.ReactNode;
};

const routes: RouteType[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/success-stories",
    element: <SuccessStories />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/success-read/:id",
    element: <SuccessReadPage />,
  },
];

export default routes;
