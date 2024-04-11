import { FC } from "react";
import HeavyCards, { HeavyCardsProps } from "./HeavyCards";
import MiniCards, { MiniCardsProps } from "./MiniCards";

type HeavyCardsInternalProps = HeavyCardsProps & { as: "HeavyCards" };
type MiniCardsInternalProps = MiniCardsProps & { as: "MiniCards" };

type CardInternalProps = HeavyCardsInternalProps | MiniCardsInternalProps;

const CardTypeMapping = {
  HeavyCards,
  MiniCards,
} as const;

type CardOwnProps = {
  as?: keyof typeof CardTypeMapping;
} & CardInternalProps;

const defaultCardType = "HeavyCards";

const Cards: FC<CardOwnProps> = ({ as, ...rest }) => {
  const CardType: React.ComponentType<any> =
    (as && CardTypeMapping[as]) ?? CardTypeMapping[defaultCardType];

  return <CardType {...rest} />;
};

export default Cards;
