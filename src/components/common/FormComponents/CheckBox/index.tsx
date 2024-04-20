import { Box, FormControlProps, FormHelperText } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { SxProps } from "@mui/system";
import { Controller, FieldValues } from "react-hook-form";
import { getError } from "utils/common";
import styles from "./styles";

type CheckBoxProps = FieldValues &
  FormControlProps & {
    customStyles?: SxProps;
  };

const CheckBox = ({
  label,
  clearErrors,
  errors,
  name,
  rules,
  control,
  customStyles,
  ...rest
}: CheckBoxProps) => {
  const error = getError(name, errors);

  const renderCheckBox = (checked: boolean) => {
    return (
      <Box
        component="img"
        src={checked ? "/icons/check-box.svg" : "/icons/box.svg"}
        alt="checkBox"
        sx={styles.checkBox}
      />
    );
  };

  return (
    <Controller
      render={({ field }) => (
        <Box sx={{ ...styles.wrapper, ...customStyles } as SxProps}>
          <Box
            component="label"
            className="label"
            sx={styles.label}
            htmlFor={`input-${name}`}
          >
            {label}
          </Box>
          <ToggleButtonGroup
            id={`input-${name}`}
            fullWidth
            color="primary"
            ref={field.ref}
            value={field.value}
            exclusive
            onChange={(_, v) => {
              clearErrors(name);
              field.onChange(v);
            }}
            sx={styles.toggle}
          >
            <ToggleButton
              sx={{
                ...styles.btn,
                color: error && "error.main",
              }}
              value={true}
            >
              Yes
              {renderCheckBox(field.value)}
            </ToggleButton>

            <ToggleButton
              sx={{ ...styles.btn, color: error && "error.main" }}
              value={false}
            >
              No
              {renderCheckBox(
                field.value === null ? field.value : !field.value
              )}
            </ToggleButton>
            {error && <FormHelperText>{String(error.message)}</FormHelperText>}
          </ToggleButtonGroup>
        </Box>
      )}
      name={name}
      control={control}
      rules={{
        validate: {
          isRequired: (value) =>
            (rules.required && typeof value == typeof true) ||
            "This is a required field",
        },
      }}
      {...rest}
    />
  );
};
export default CheckBox;
