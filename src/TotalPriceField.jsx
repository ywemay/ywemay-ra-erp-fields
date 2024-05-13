import { PriceField } from "./PriceField";

export function TotalPriceField(props) {
  return <PriceField
    source="total_price"
    className="number-field"
    {...props}
  />
}

TotalPriceField.defaultProps = { label: "total.price" }