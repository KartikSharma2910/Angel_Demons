import { Styles } from "types/common";

const styles: Styles = {
  descriptionBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "30px",
  },

  descriptionHead: {
    fontSize: {
      xs: "18px",
      sm: "20px",
      md: "22px",
    },
    width: {
      width: "100%",
      sm: "80%",
      md: "40%",
    },
  },

  descriptionDesc: {
    fontSize: {
      xs: "12px",
      sm: "14px",
      md: "16px",
    },
    color: "#8C8C8C",
    width: {
      xs: "100%",
      md: "60%",
    },
  },

  cardsWrapper: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    rowGap: 3,
    justifyContent: "space-between",
    alignItems: "center",
  },

  card: {
    width: {
      xs: "100%",
      sm: "48%",
      md: "32%",
    },
  },
};

export default styles;
