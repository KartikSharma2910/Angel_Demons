import { Box } from "@mui/material";
import styles from "./styles";

const CompanySection = () => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.quoteWrapper}>
        <Box sx={styles.quote}>
          "At TechGenius Solutions, we believe in harnessing the power of
          technology to drive positive change and empower businesses to thrive
          in the digital age."
        </Box>
        <Box sx={styles.quoteBy}>- Arjun Gupta, Founder & CEO</Box>
      </Box>
      <Box sx={styles.contantBox}>
        <Box sx={styles.contentHeading}>Introduction</Box>
        <Box sx={styles.text}>
          Founded in 2017 by visionary entrepreneur Arjun Gupta, TechGenius
          Solutions has been a trailblazer in the Indian tech industry,
          redefining the way businesses operate and interact with technology.
          With a relentless focus on innovation and excellence, TechGenius
          Solutions has emerged as a driving force behind the digital
          transformation of countless organizations.
        </Box>
      </Box>
      <Box sx={styles.contantBox}>
        <Box sx={styles.contentHeading}>Overview</Box>
        <Box sx={styles.overviewWrapper}>
          <Box sx={styles.overviewContent}>
            <Box sx={styles.overviewHeading}>Year Founded</Box>
            <Box sx={styles.overviewData}>2022</Box>
          </Box>
          <Box sx={styles.overviewContent}>
            <Box sx={styles.overviewHeading}>Status</Box>
            <Box sx={styles.overviewData}>Private</Box>
          </Box>
          <Box sx={styles.overviewContent}>
            <Box sx={styles.overviewHeading}>Latest Deal Type</Box>
            <Box sx={styles.overviewData}>Seed</Box>
          </Box>
          <Box sx={styles.overviewContent}>
            <Box sx={styles.overviewHeading}>Latest Deal Amount</Box>
            <Box sx={styles.overviewData}>$4M</Box>
          </Box>
          <Box sx={styles.overviewContent}>
            <Box sx={styles.overviewHeading}>Investors</Box>
            <Box sx={styles.overviewData}>7</Box>
          </Box>
        </Box>
      </Box>
      <Box sx={styles.contantBox}>
        <Box sx={styles.contentHeading}>Contact Information</Box>
        <Box sx={styles.contactWrapper}>
          <Box sx={styles.contactsContent}>
            <Box sx={styles.overviewHeading}>Website</Box>
            <Box sx={styles.contactText}>www.techg.com</Box>
          </Box>
          <Box sx={styles.contactsContent}>
            <Box sx={styles.overviewHeading}>Primary Industry</Box>
            <Box sx={styles.contactText}>Primary Industry</Box>
          </Box>
          <Box sx={styles.contactsContent}>
            <Box sx={styles.overviewHeading}>Corporate Office</Box>
            <Box sx={styles.contactText}>Cupertino, CA 95014,United States</Box>
          </Box>
          <Box sx={styles.contactsContent}>
            <Box sx={styles.overviewHeading}>Target market</Box>
            <Box sx={styles.contactText}>B2B,B2C,B2B2C,Franchise</Box>
          </Box>
          <Box sx={styles.contactsContent}>
            <Box sx={styles.overviewHeading}>Other Industries</Box>
            <Box sx={styles.contactText}>Business/Productivity Software</Box>
          </Box>
          <Box sx={styles.contactsContent}>
            <Box sx={styles.overviewHeading}>Revenue Stream</Box>
            <Box sx={styles.contactText}>
              Subscription,Freemium,Advertising,Pay Per Transaction
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CompanySection;
