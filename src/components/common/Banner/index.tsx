import React, { FC } from "react";
import DividedBanner, { DividedBannerProps } from "./DividedBanner";
import SimpleBanner, { SimpleBannerProps } from "./SimpleBanner";

type SimpleBannerInternalProps = SimpleBannerProps & { as: "SimpleBanner" };
type DividedBannerInternalProps = DividedBannerProps & { as: "DividedBanner" };

type BannerInternalProps =
  | SimpleBannerInternalProps
  | DividedBannerInternalProps;

const BannerTypeMapping = {
  SimpleBanner,
  DividedBanner,
} as const;

type BannerOwnProps = {
  as?: keyof typeof BannerTypeMapping;
} & BannerInternalProps;

const defaultBannerType = "SimpleBanner";

const Banner: FC<BannerOwnProps> = ({ as, ...rest }) => {
  const BannerType: React.ComponentType<any> =
    (as && BannerTypeMapping[as]) ?? BannerTypeMapping[defaultBannerType];

  return <BannerType {...rest} />;
};

export default Banner;
