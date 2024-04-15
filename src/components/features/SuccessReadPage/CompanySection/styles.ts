import { Styles } from "types/common";

const styles: Styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    gap: 5,
    padding: "3rem",
  },

  quoteWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "end",
    gap: "20px",
  },

  quote: {
    width: "70%",
    margin: "0 auto",
    textAlign: "center",
    fontSize: "24px",
  },

  quoteBy: {
    textAlign: "end",
    fontSize: "14px",
    width: "70%",
    margin: "0 auto",
  },

  contantBox: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    gap: 6,
    alignItems: "center",
    justifyContent: "center",
  },

  contentHeading: {
    fontSize: {
      mobile: "14px",
      tablet: "16px",
    },
    color: "#1E6F7E",
  },

  text: {
    textAlign: "center",
    width: "80%",
    margin: "0 auto",
    fontSize: "14px",
    color: "#8C8C8C",
  },

  dataContainer: {
    width: "80%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  data: {
    display: "flex",
    width: "25%",
    alignItems: "center",
    flexDirection: "column",
    gap: "15px",
  },

  dataHeading: {
    fontSize: "14px",
    opacity: 0.8,
    fontWeight: 200,
  },

  dataDescription: {
    fontSize: "16px",
  },

  businessDataContainer: {
    width: "60%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: "30px",
    alignItems: "center",
  },

  businessData: {
    width: "30%",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  businessDescription: {
    fontSize: "12px",
  },

  businessStageWrapper: {
    display: "flex",
    width: "90%",
    justifyContent: "space-between",
    alignItems: "center",
  },

  businessStage: {
    width: "20%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: "15px",
  },

  businessStageHeading: {
    fontSize: "30px",
    color: "#1B5D7A",
  },

  businessStageDescription: {
    fontSize: "12px",
    opacity: 0.8,
  },

  featureContainer: {
    display: "flex",
    width: "80%",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: "3rem",
  },

  featureBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
  },

  icon: {
    fontSize: "40px",
    color: "#1B5D7A",
  },

  featureDescription: {
    fontSize: "12px",
  },

  marketingContainer: {
    width: "90%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  cardBox: {
    width: "48%",
    border: "1px solid red",
  },

  card: {
    border: "1px solid white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  cardContent: {
    width: "45%",
    height: "100%",
    border: "1px solid pink",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    justifyContent: "space-between",
    alignItems: "center",
  },
};

export default styles;
