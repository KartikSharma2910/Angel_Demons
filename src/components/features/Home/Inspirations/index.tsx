import { Box } from "@mui/material";
import { Button, Cards, Section } from "components/common";
import { cardsData } from "constant/inspirations";
import styles from "./styles";

const Inspirations = () => {
  return (
    <Section
      id="inspirations"
      heading="SUCCESS STORIES"
      description="Inspiring Tales of Triumph"
    >
      <Box sx={styles.wrapper}>
        <Box sx={styles.container}>
          <Box sx={styles.image} component="img" src="/inspiration.jpeg" />
        </Box>
        <Box sx={styles.dataContainer}>
          <Box sx={styles.heading}>
            Explore the incredible success stories of entrepreneurs who dared to
            dream and found their path to success through Angels and Demons
          </Box>
          <Box sx={styles.cardsContainer}>
            {cardsData.map(
              ({ imageUrl, position, userName, description }, index) => (
                <Cards
                  as="MiniCards"
                  key={index}
                  imageUrl={imageUrl}
                  position={position}
                  userName={userName}
                  description={description}
                />
              )
            )}
          </Box>
          <Button as="LinkButton" to="/" label="SEE MORE" />
        </Box>
      </Box>
    </Section>
  );
};

export default Inspirations;
