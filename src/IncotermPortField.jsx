import { TextField } from "react-admin";

export function IncotermPortField(props) {
  return <TextField
    label="incoterms.port"
    source="port"
    {...props}
    />
}

IncotermPortField.defaultProps = { label: "incoterms.port" }