import { TextField } from "react-admin";

export function CompanyNameField(props) {
  return <TextField
    label="company.name"
    source="company_name"
    {...props}
    />
}

CompanyNameField.defaultProps = { label: "company.name" }