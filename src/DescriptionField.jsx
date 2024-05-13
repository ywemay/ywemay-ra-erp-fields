import { TextField } from "react-admin";

export function DescriptionField(props) {
  return <TextField
    className="w-full"
    label={false}
    source="description"
    {...props}
    />
}