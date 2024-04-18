import { Box, Modal } from "@mui/material";
import { Button, DropDown, Input } from "components/common";
import { useForm } from "react-hook-form";
import styles from "./styles";

const AngelRegistration = () => {
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
      open={true}
      onClose={() => console.log("close")}
    >
      <Box sx={styles.wrapper}>
        <Box sx={styles.container}>
          <Box sx={styles.heading}>
            Register as an Angel Investor to Make a Difference in the Business
            World!
          </Box>
          <Box sx={styles.containerWrapper}>
            <Box sx={styles.text}>Personal Information</Box>
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
                name="email"
                label="Email Address"
                placeholder="Enter your email"
                errors={errors}
                customStyles={styles.input}
                control={control}
                isRequired
                rules={{ required: "This is a required field" }}
              />
              <Input
                name="contact"
                label="Contact Number"
                placeholder="Enter your contact"
                errors={errors}
                customStyles={styles.input}
                control={control}
                isRequired
                rules={{ required: "This is a required field" }}
              />
            </Box>
          </Box>
          <Box sx={styles.containerWrapper}>
            <Box sx={styles.text}>Investment Details</Box>
            <Box sx={styles.formWrapper}>
              <DropDown
                name="investmentCapicity"
                label="Investment Capacity (in INR)"
                errors={errors}
                control={control}
                customStyles={styles.input}
                options={[]}
                isRequired
                rules={{ required: "This is a required field" }}
              />
              <DropDown
                name="investmentPreference"
                label="Investment Preference"
                errors={errors}
                control={control}
                customStyles={styles.input}
                options={[]}
                isRequired
                rules={{ required: "This is a required field" }}
              />
            </Box>
          </Box>
          <Box sx={styles.containerWrapper}>
            <Box sx={styles.text}>Upload Documents</Box>
            <Box sx={styles.formWrapper}>
              <Input
                name="proofOfIdentity"
                label="Proof of Identity (Upload)"
                placeholder="Proff Of Identity"
                errors={errors}
                customStyles={styles.input}
                control={control}
                isRequired
                rules={{ required: "This is a required field" }}
              />
              <Input
                name="proofOfFunds"
                label="Proof of Funds (Upload)"
                placeholder="Proff Of Funds"
                errors={errors}
                customStyles={styles.input}
                control={control}
                isRequired
                rules={{ required: "This is a required field" }}
              />
            </Box>
          </Box>
          <Box sx={styles.agreements}>
            <Box sx={styles.agreementHeading}>Terms And Conditions</Box>
            <Box sx={styles.agreementDescription}>
              By registering as an Angel or Demon Investor on Angels and Demons,
              you agree to comply with the following terms and conditions:
            </Box>
            <Box sx={styles.agreementPoints}>
              <Box>
                1. You certify that all information provided during registration
                is accurate and complete.
              </Box>
              <Box>
                2. You acknowledge that investing in entrepreneurial ventures
                carries inherent risks and that past performance is not
                indicative of future results.
              </Box>
              <Box>
                3. You agree to abide by the ethical guidelines and investment
                policies outlined by Angels and Demons.
              </Box>
              <Box>
                4. You consent to the processing and storage of your personal
                data for the purpose of facilitating investment transactions and
                communication with entrepreneurs.
              </Box>
              <Box>
                5. You understand that Angels and Demons reserves the right to
                verify the authenticity of the provided documents and reject
                applications that do not meet the eligibility criteria
              </Box>
            </Box>
          </Box>
          <Box sx={styles.agreements}>
            <Box sx={styles.agreementHeading}>Privacy Policy</Box>
            <Box sx={styles.agreementDescription}>
              Our privacy policy outlines how we collect, use, and protect your
              personal information. By registering on Angels and Demons, you
              agree to our privacy policy terms, which can be found read more.
            </Box>
          </Box>
          <Button label="Submit" onClick={() => trigger()} />
        </Box>
      </Box>
    </Modal>
  );
};

export default AngelRegistration;
