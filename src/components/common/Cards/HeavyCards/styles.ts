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
      xs: "300px",
      sm: "400px",
      md: "450px",
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
      xs: "16px",
      sm: "18px",
      md: "20px",
    },
    fontWeight: 600,
  },

  users: {
    fontSize: {
      xs: "12px",
      sm: "14px",
      md: "16px",
    },
    fontWeight: 200,
  },

  category: {
    fontSize: {
      xs: "12px",
      md: "14px",
    },
    "& .subCategory": {
      color: "#8C8C8C",
    },
  },

  description: {
    fontSize: {
      xs: "12px",
      md: "14px",
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
      xs: "10px",
      md: "11px",
    },
    backgroundColor: "#2A3231",
  },

  button: {
    minWidth: "130px",
  },

  modalOpenerButton: {
    minWidth: "130px",
    borderRadius: 0,
    background: "transparent",
    border: "1px solid white",
    height: {
      xs: "35px",
      md: "40px",
    },
  },
};

export default styles;
