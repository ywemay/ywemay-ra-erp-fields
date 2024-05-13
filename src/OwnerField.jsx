import { TextField } from "react-admin";

export function OwnerField(props) {
  return <TextField
    source="owner_id"
    />
}

OwnerField.defaultProps = { label: "common.owner" }