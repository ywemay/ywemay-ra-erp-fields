import { TextField } from "react-admin";

export function NotesField(props) {
  return <TextField
    label="core.notes"
    source="notes"
    {...props}
    />
}

NotesField.defaultProps = { label: 'core.notes' }