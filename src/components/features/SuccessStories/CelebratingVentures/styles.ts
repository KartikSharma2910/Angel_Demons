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
      mobile: "18px",
      tablet: "20px",
      laptop: "22px",
    },
    width: {
      width: "100%",
      tablet: "80%",
      laptop: "40%",
    },
  },

  descriptionDesc: {
    fontSize: {
      mobile: "12px",
      tablet: "14px",
      laptop: "16px",
    },
    color: "#8C8C8C",
    width: {
      mobile: "100%",
      laptop: "60%",
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
      mobile: "100%",
      tablet: "48%",
      laptop: "32%",
    },
  },
};

export default styles;
