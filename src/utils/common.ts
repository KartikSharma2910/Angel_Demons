import { FieldErrors, FieldValues } from "react-hook-form";

export const keyToLabel = (str: string) => {
  return str.replace(/([A-Z])/g, " $1").replace(/^./, function (value) {
    return value.toUpperCase();
  });
};

export const getError = (name: string, errors: FieldErrors) => {
  if (!Object.keys(errors).length) return undefined;

  return name
    .split(".")
    .map((item) => item.replaceAll("[", "").replaceAll("]", ""))
    .reduce((prev, curr) => (prev ? prev[curr] : prev), errors);
};

export const isFormEdited = (dirtyFields: FieldValues, fields: string[]) => {
  return fields.reduce((prev, curr) => {
    return prev || dirtyFields[curr];
  }, false);
};
