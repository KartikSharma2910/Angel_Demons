import { Styles } from "types/common";

const styles: Styles = {
  wrapper: {
    height: "65px",
    width: "100%",
    zIndex: 1000,
    display: "flex",
    alignItems: "center",
    position: "sticky",
    top: 0,
    justifyContent: "space-between",
    padding: "0px 4%",
    transition: "all 0.4s",
  },

  header: {
    fontSize: {
      mobile: "16px",
      tablet: "18px",
    },
    fontWeight: "bold",
  },

  list: {
    display: "flex",
    alignItems: "center",
    gap: "30px",
  },

  listItem: {
    fontSize: "14px",
    letterSpacing: "1.5px",
    fontWeight: 400,
  },
};

export default styles;
