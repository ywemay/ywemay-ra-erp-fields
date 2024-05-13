import { TextField } from "react-admin";

export function CompanyNameField(props) {
  return <TextField
    source="company_name"
    {...props}
    />
}

CompanyNameField.defaultProps = { label: "company.name" }