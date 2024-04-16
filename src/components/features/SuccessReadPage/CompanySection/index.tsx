import { Box } from "@mui/material";
import {
  businessStage,
  contactData,
  features,
  financeCards,
  marketingCards,
  overviewData,
} from "constant/SuccessReadPage";
import { Fragment } from "react/jsx-runtime";
import styles from "./styles";

const CompanySection = () => {
  function truncateText(text: string, limit: number) {
    const words = text.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    } else {
      return text;
    }
  }

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
        {overviewData.map(({ heading, subData }, index) => (
          <Fragment key={index}>
            <Box sx={styles.contentHeading}>{heading}</Box>
            <Box sx={styles.dataContainer}>
              {subData.map(({ label, text }, index) => (
                <Box key={index} sx={styles.data}>
                  <Box sx={styles.dataHeading}>{label}</Box>
                  <Box sx={styles.dataDescription}>{text}</Box>
                </Box>
              ))}
            </Box>
          </Fragment>
        ))}
      </Box>
      <Box sx={styles.contantBox}>
        {contactData.map(({ heading, subData }, index) => (
          <Fragment key={index}>
            <Box sx={styles.contentHeading}>{heading}</Box>
            <Box sx={styles.businessDataContainer}>
              {subData.map(({ label, text }, index) => (
                <Box key={index} sx={styles.businessData}>
                  <Box sx={styles.dataHeading}>{label}</Box>
                  <Box sx={styles.businessDescription}>{text}</Box>
                </Box>
              ))}
            </Box>
          </Fragment>
        ))}
      </Box>
      <Box sx={styles.contantBox}>
        {businessStage.map(({ heading, subData }, index) => (
          <Fragment key={index}>
            <Box sx={styles.contentHeading}>{heading}</Box>
            <Box sx={styles.businessStageWrapper}>
              {subData.map(({ label, text }, index) => (
                <Box key={index} sx={styles.businessStage}>
                  <Box sx={styles.businessStageHeading}>{label}</Box>
                  <Box sx={styles.businessStageDescription}>{text}</Box>
                </Box>
              ))}
            </Box>
          </Fragment>
        ))}
      </Box>
      <Box sx={styles.contantBox}>
        <Box sx={styles.featureContainer}>
          {features.map(({ icon: Icon, label }, index) => (
            <Box key={index} sx={styles.featureBox}>
              <Box>
                <Icon sx={styles.icon} />
              </Box>
              <Box sx={styles.featureDescription}>{label}</Box>
            </Box>
          ))}
        </Box>
      </Box>
      <Box sx={styles.marketingContainer}>
        <Box sx={styles.cardBox}>
          <Box sx={styles.contentHeading}>Marketing</Box>
          <Box sx={styles.card}>
            {marketingCards.map(
              ({ icon: Icon, feature, rate, text }, index) => (
                <Box sx={styles.cardContent} key={index}>
                  <Icon sx={styles.cardIcon} />
                  <Box sx={styles.feature}>{feature}</Box>
                  <Box sx={styles.rate}>{rate}</Box>
                  <Box sx={styles.cardText}>{truncateText(text, 30)}</Box>
                </Box>
              )
            )}
          </Box>
        </Box>
        <Box sx={styles.cardBox}>
          <Box sx={styles.contentHeading}>Finance</Box>
          <Box sx={styles.card}>
            {financeCards.map(({ icon: Icon, feature, rate, text }, index) => (
              <Box sx={styles.cardContent} key={index}>
                <Icon sx={styles.cardIcon} />
                <Box sx={styles.feature}>{feature}</Box>
                <Box sx={styles.rate}>{rate}</Box>
                <Box sx={styles.cardText}>{truncateText(text, 30)}</Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Box sx={styles.contantBox}>
        <Box sx={styles.contentHeading}>USP</Box>
        <Box sx={styles.uspText}>
          <Box sx={styles.headLine}>
            In a crowded market, Tech Genius Solutions stands out with its:
          </Box>
          <Box sx={styles.bulletPoints}>
            <li>
              <span className="heading">Focus on:</span> We prioritize water
              conservation and increased crop yield for small-scale farmers,
              directly addressing a critical pain point in the industry.
            </li>
            <li>
              <span className="heading">Easy-to-use technology:</span> Our
              platform is designed for user-friendliness, ensuring accessibility
              even for those with limited technical expertise.
            </li>
            <li>
              <span className="heading">
                Scalable and sustainable solutions:
              </span>
               We offer solutions that can grow alongside our users' needs while
              promoting environmental responsibility, helping farmers achieve up
              to 30% water savings and 10% increased crop yields.
            </li>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CompanySection;
