import {
  AngelRegistration,
  DemonRegistration,
  Home,
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
    path: "/demon-investor",
    element: <DemonRegistration />,
  },
  {
    path: "/angel-investor",
    element: <AngelRegistration />,
  },
  {
    path: "/success-read/:id",
    element: <SuccessReadPage />,
  },
];

export default routes;
