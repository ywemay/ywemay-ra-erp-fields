import { TextField } from "react-admin";

export function TitleField (props) {
  return <TextField 
    label="common.title"
    source="title"
    {...props}
    />
}

TitleField.props = { label: 'common.title' }