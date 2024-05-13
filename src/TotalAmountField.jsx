import { PriceField } from ".";

export function TotalAmountField(props) {
  return <PriceField
    source="total_amount"
    className="number-field"
    {...props}
  />
}

TotalAmountField.defaultProps = { label: "total.amount" }