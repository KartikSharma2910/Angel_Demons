import React, { FC } from "react";
import DefaultLayout from "./DefaultLayout";

const LayoutTypesMapping = {
  DefaultLayout,
} as const;

type LayoutProps = {
  asLayout?: keyof typeof LayoutTypesMapping;
  children: React.ReactNode;
};

const defaultLayoutType = "DefaultLayout";

const Layout: FC<LayoutProps> = ({
  asLayout = defaultLayoutType,
  children,
  ...rest
}) => {
  const LayoutType: React.ComponentType<any> = LayoutTypesMapping[asLayout];

  return <LayoutType {...rest}>{children}</LayoutType>;
};

export default Layout;
