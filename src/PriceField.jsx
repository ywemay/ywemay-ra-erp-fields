import { NumberField, useRecordContext } from "react-admin";
const { VITE_CURRENCY: currency } = import.meta.env;

export function PriceField({currency_source, ...props}) {
  const record = useRecordContext();
  const options = {
    style: 'currency',
    currency: currency || 'CNY',
  };
  if (currency_source && record[currency_source]) {
    options.currency = record[currency_source];
  }
  return <NumberField
    source="unit_price"
    className="number-field"
    options={options}
    {...props}
    />
}

PriceField.defaultProps = { label: "common.price" }