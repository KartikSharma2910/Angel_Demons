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
    width: {
      mobile: "100%",
      laptop: "70%",
    },
    margin: "0 auto",
    textAlign: "center",
    fontSize: {
      mobile: "18px",
      tablet: "20px",
      laptop: "24px",
    },
  },

  quoteBy: {
    textAlign: "end",
    fontSize: "14px",
    width: {
      mobile: "100%",
      laptop: "70%",
    },
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
    textAlign: "center",
    color: "#1E6F7E",
  },

  text: {
    textAlign: "center",
    width: {
      mobile: "100%",
      tablet: "80%",
    },
    margin: "0 auto",
    fontSize: {
      mobile: "12px",
      tablet: "14px",
    },
    color: "#8C8C8C",
  },

  dataContainer: {
    width: {
      mobile: "100%",
      laptop: "80%",
    },
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    rowGap: 3,
    justifyContent: "space-between",
  },

  data: {
    display: "flex",
    width: {
      mobile: "46%",
      tablet: "30%",
      laptop: "20%",
    },
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
    backgroundColor: "#050E0F",
    padding: "3% 2%",
    justifyContent: "space-between",
  },

  cardBox: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
    width: "48%",
  },

  card: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  cardContent: {
    width: "45%",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    padding: "25px 15px",
    height: "380px",
    backgroundColor: "#081311",
    justifyContent: "space-between",
    alignItems: "center",
  },

  cardIcon: {
    fontSize: "60px",
  },

  feature: {
    fontSize: "12px",
  },

  rate: {
    fontSize: "30px",
    color: "#1B5D7A",
  },

  cardText: {
    fontSize: "12px",
    textAlign: "center",
    color: "#8C8C8C",
  },

  uspText: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    width: "80%",
    margin: "0 auto",
    fontSize: "14px",
    color: "#8C8C8C",
    "& .heading": {
      color: "white",
      opacity: 0.8,
    },
  },

  headLine: {
    textAlign: "center",
  },

  bulletPoints: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  foundersWrapper: {
    width: {
      mobile: "100%",
      laptop: "80%",
    },
    rowGap: 2,
    display: "flex",
    flexDirection: {
      mobile: "column",
      tablet: "row",
    },
    justifyContent: "space-between",
  },

  founderCard: {
    border: "1px solid #4D5051",
    width: {
      mobile: "100%",
      tablet: "46%",
    },
  },

  founderImage: {
    width: "100%",
    objectFit: "cover",
    height: "350px",
  },

  founderContent: {
    display: "flex",
    gap: "20px",
    height: "300px",
    padding: "15px",
    backgroundColor: "#111816",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  founderName: {
    fontSize: "30px",
    fontWeight: 600,
  },

  founderPosition: {
    fontSize: "14px",
  },

  founderSplit: {
    fontSize: "14px",
  },

  founderAbout: {
    fontSize: "14px",
    textAlign: "center",
    color: "#8C8C8C",
  },

  accordianContainer: {
    width: "80%",
    "& .MuiAccordion-root": {
      backgroundColor: "transparent",
      borderBottom: "1px solid #8C8C8C",
      padding: "20px",
      color: "white",
    },
  },

  accordianIcon: {
    display: "flex",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    height: {
      xs: "41px",
      sm: "48px",
    },
    width: "50px",
  },

  accordianSummaryWrapper: {
    display: "flex",
    gap: "15px",
    alignItems: "center",
  },

  accordianText: {
    fontSize: "18px",
    color: "#1B5D7A",
    fontWeight: 500,
  },

  accordianDescription: {
    fontSize: "14px",
    color: "#8C8C8C",
    paddingLeft: "5%",
  },
};

export default styles;
