import { Styles } from "types/common";

const styles: Styles = {
  wrapper: {
    position: "relative",
    width: "100%",
    height: "100%",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    opacity: 0.4,
    objectPosition: "center",
  },

  users: {
    position: "absolute",
    left: 0,
    objectFit: "contain",
    width: "30%",
    transform: "scaleX(-1)",
  },

  content: {
    zIndex: 10,
    color: "white",
    position: "absolute",
    top: "50%",
    left: "50%",
  },
};

export default styles;
