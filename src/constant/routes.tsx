import { Home, Registration, SuccessStories } from "components/features";
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
];

export default routes;
