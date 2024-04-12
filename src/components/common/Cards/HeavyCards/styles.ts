import { Styles } from "types/common";

const styles: Styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    border: "1px solid #444A4A",
  },

  image: {
    width: "100%",
    height: {
      mobile: "300px",
      tablet: "400px",
      laptop: "450px",
    },
    objectFit: "cover",
    objectPosition: "center",
  },

  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    padding: "30px",
  },

  brand: {
    fontSize: {
      mobile: "16px",
      tablet: "18px",
      laptop: "20px",
    },
    fontWeight: 600,
  },

  users: {
    fontSize: {
      mobile: "12px",
      tablet: "14px",
      laptop: "16px",
    },
    fontWeight: 200,
  },

  category: {
    fontSize: {
      mobile: "12px",
      laptop: "14px",
    },
    "& .subCategory": {
      color: "#8C8C8C",
    },
  },

  description: {
    fontSize: {
      mobile: "12px",
      laptop: "14px",
    },
    color: "#8C8C8C",
    textAlign: "center",
  },

  stage: {
    fontSize: "12px",
    "& .stages": {
      color: "#8C8C8C",
    },
  },

  buttonWrapper: {
    display: "flex",
    gap: 3,
  },

  chipsWrapper: {
    display: "flex",
    flexWrap: "wrap",
    gap: "5px",
  },

  chip: {
    color: "white",
    fontSize: {
      mobile: "10px",
      laptop: "11px",
    },
    backgroundColor: "#2A3231",
  },

  button: {
    minWidth: "130px",
  },
};

export default styles;
