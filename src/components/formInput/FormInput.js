import React from "react";
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";

const FormInput = (props) => {
  const { label, type, placeholder, value, onChange } = props;
  let formProps;
  switch (type) {
    case "textarea":
      formProps = { as: type, value };
      break;
    case "file":
      formProps = { type };
      break;
    default:
      props = {
        type,
        value,
      };
      break;
  }

  return (
    <FormGroup className="mb-3">
      <FormLabel>{label}</FormLabel>
      <FormControl
        {...formProps}
        placeholder={placeholder}
        onChange={onChange}
      />
    </FormGroup>
  );
};

export default FormInput;
