import { NumberField } from "react-admin";

export function TotalItemsField(props) {
  return <NumberField
    source="total_items"
    className="number-field"
    {...props}
  />
}

TotalItemsField.defaultProps = { label: "total.items" }