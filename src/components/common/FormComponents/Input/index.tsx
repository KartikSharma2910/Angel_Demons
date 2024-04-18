import {
  FormControl,
  FormControlProps,
  FormHelperText,
  InputBase,
  InputBaseProps,
  InputLabel,
} from "@mui/material";
import { SxProps } from "@mui/system";
import { Controller, FieldErrors, FieldValues } from "react-hook-form";
import { getError } from "utils/common";

type InputProps = FieldValues &
  FormControlProps &
  InputBaseProps & {
    type?: "text" | "number";
    label: string;
    errors?: FieldErrors;
    maxLength?: number;
    isRequired?: boolean;
    customStyles?: SxProps;
  };

const Input = ({
  name,
  control,
  label,
  type = "text",
  fullWidth = true,
  errors,
  rules,
  customStyles,
  maxLength,
  isRequired,
  inputProps,
  variant = "standard",
  className,
  ...rest
}: InputProps) => {
  const error = getError(name, errors);

  return (
    <Controller
      render={({ field }) => (
        <FormControl
          sx={customStyles}
          fullWidth={fullWidth}
          variant={variant}
          className={className}
        >
          <InputLabel shrink required={isRequired} htmlFor={`input-${name}`}>
            {label}
          </InputLabel>
          <InputBase
            id={`input-${name}`}
            type={type}
            value={field.value}
            onChange={field.onChange}
            inputRef={field.ref}
            onBlur={field.onBlur}
            inputProps={{
              maxLength: maxLength,
              ...inputProps,
            }}
            autoComplete="new-password"
            error={!!error}
            {...rest}
          />
          {error && <FormHelperText>{String(error.message)}</FormHelperText>}
        </FormControl>
      )}
      name={name}
      control={control}
      rules={rules}
      {...rest}
    />
  );
};
export default Input;
