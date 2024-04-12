import { Box } from "@mui/material";
import { Cards, Section } from "components/common";
import { cardsData } from "constant/ventures";
import styles from "./styles";

const CelebratingVentures = () => {
  return (
    <Section
      id="celebration"
      customStyles={{ minHeight: "100vh", height: "100%" }}
      heading="Celebrating Angel and Demon Ventures"
      description={
        <Box sx={styles.descriptionBox}>
          <Box sx={styles.descriptionHead}>
            Explore the Inspiring Journey of Entrepreneurs Supported by Angels
            and Demons"
          </Box>
          <Box sx={styles.descriptionDesc}>
            Step into the world of entrepreneurial excellence and discover the
            success stories born from the unique partnership between Angels and
            Demons. From groundbreaking startups to transformative ventures,
            each success tale is a testament to the power of vision, resilience,
            and collaboration.
          </Box>
        </Box>
      }
    >
      <Box sx={styles.cardsWrapper}>
        {cardsData.map((data, index) => (
          <Cards
            key={index}
            customStyles={styles.card}
            as="HeavyCards"
            {...data}
          />
        ))}
      </Box>
    </Section>
  );
};

export default CelebratingVentures;
