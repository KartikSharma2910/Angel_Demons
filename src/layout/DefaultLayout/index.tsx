import { Box } from "@mui/material";
import { Footer, Header } from "components/common";
import React, { Fragment } from "react";

type DefaultLayoutProps = {
  children: React.ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <Fragment>
      <Header />
      <Box>{children}</Box>
      <Footer />
    </Fragment>
  );
};

export default DefaultLayout;
