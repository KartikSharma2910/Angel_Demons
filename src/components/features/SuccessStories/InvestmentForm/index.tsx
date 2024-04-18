import { Box, Modal } from "@mui/material";
import { Button, CheckBox, DropDown, Input } from "components/common";
import { useForm } from "react-hook-form";
import styles from "./styles";

const InvestmentForm = ({ open, handleClose }) => {
  const {
    control,
    formState: { errors },
    trigger,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      contact: "",
      proofOfIdentity: "",
      proofOfFunds: "",
      investmentCapicity: "",
      investmentPreference: "",
    },
    mode: "all",
    criteriaMode: "all",
  });

  return (
    <Modal
      disableAutoFocus
      disableEnforceFocus
      disableScrollLock
      sx={styles.modal}
      open={open}
      onClose={handleClose}
    >
      <Box sx={styles.wrapper}>
        <Box sx={styles.container}>
          <Box sx={styles.heading}>
            Tech Genius Solutions Investment Interest
          </Box>
          <Box sx={styles.heading}>
            Thank you, [User Name] for your interest in investing in Tech Genius
            Solutions! To proceed, please confirm the following information:
          </Box>
          <Box sx={styles.containerWrapper}>
            <Box sx={styles.text}>Investor Information</Box>
            <Box sx={styles.formWrapper}>
              <Input
                name="name"
                label="Name"
                placeholder="Enter your email"
                errors={errors}
                customStyles={styles.input}
                control={control}
                isRequired
                rules={{ required: "This is a required field" }}
              />
              <Input
                name="startup"
                label="Startup"
                placeholder="Startup"
                errors={errors}
                customStyles={styles.input}
                control={control}
                isRequired
                rules={{ required: "This is a required field" }}
              />
            </Box>
          </Box>
          <Box sx={styles.containerWrapper}>
            <Box sx={styles.text}>Investment Interest</Box>
            <Box sx={styles.formWrapper}>
              <CheckBox
                name="intrestedInTechGenius"
                label="Do you intend to invest in Tech Genius Solutions?"
                control={control}
                errors={errors}
                rules={{ required: "This is a required field" }}
              />
              <Input
                name="investmentDetails"
                label="Investment Details"
                errors={errors}
                control={control}
                isRequired
                rules={{ required: "This is a required field" }}
              />
              <CheckBox
                name="successfulInvestmentExit"
                label="Have you previously had a successful investment exit?"
                control={control}
                errors={errors}
                rules={{ required: "This is a required field" }}
              />
              <Input
                name="totalInvestmentAmount"
                label="If yes, what was the total investment amount you exited with?"
                errors={errors}
                control={control}
                isRequired
                rules={{ required: "This is a required field" }}
              />
            </Box>
          </Box>
          <Box sx={styles.containerWrapper}>
            <Box sx={styles.text}>
              Delegate representing the Firm (CEO, CTO, or Other)?
            </Box>
            <Box sx={styles.formWrapper}>
              <DropDown
                name="selectOne"
                label="Select One"
                options={[]}
                errors={errors}
                customStyles={styles.input}
                control={control}
                isRequired
                rules={{ required: "This is a required field" }}
              />
              <Input
                name="pleaseSpecify"
                label="Please Specify"
                errors={errors}
                customStyles={styles.input}
                control={control}
                isRequired
                rules={{ required: "This is a required field" }}
              />
            </Box>
          </Box>
          <Box sx={styles.agreements}>
            <Box sx={styles.agreementHeading}>Next Steps</Box>
            <Box sx={styles.agreementDescription}>
              Once you submit this form, a representative from Angels And Demons
              will contact you to discuss your investment interest further.
            </Box>
          </Box>
          <Box sx={styles.agreements}>
            <Box sx={styles.agreementHeading}>Please note</Box>
            <Box sx={styles.agreementDescription}>
              This information will be used to assess your suitability as an
              investor for the show
            </Box>
          </Box>
          <Button label="Submit" onClick={() => trigger()} />
        </Box>
      </Box>
    </Modal>
  );
};

export default InvestmentForm;
