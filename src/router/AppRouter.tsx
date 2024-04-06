import routes from "constant/routes";
import Layout from "layout";
import { Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <Routes>
      {routes.map(({ path, element }, index) => {
        return (
          <Route
            key={index}
            path={path}
            element={<Layout asLayout="DefaultLayout">{element}</Layout>}
          />
        );
      })}
    </Routes>
  );
};

export default AppRouter;
