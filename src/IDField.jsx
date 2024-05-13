import { NumberField } from "react-admin";

export function IDField(props) {
  return <NumberField
    source="id"
    label="common.id"
    className="flex justify-end"
    {...props}
    />
}

IDField.defaultProps = { label: "common.id" }