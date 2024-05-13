import { PriceField } from ".";

export function UnitPriceField(props) {
  return <PriceField
    source="unit_price"
    className="number-field"
    {...props}
    />
}

UnitPriceField.defaultProps = { label: "common.unitPrice" }