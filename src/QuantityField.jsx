import { 
  FunctionField,
  useRecordContext,
  useTranslate,
 } from "react-admin";

export function QuantityField({mu:defaultMu, mu_source, source, ...props}) {
  const translate = useTranslate();
  let unit = false;
  if (mu_source) {
    const record = useRecordContext()
    unit = record[mu_source] || defaultMu || unit;
  }
  else {
    unit = defaultMu || unit;
  }
  const mu = unit && translate('mu.' + unit);
  return <FunctionField
    className="flex flex-row justify-end"
    render= {(record) => {
      return <div>{record[source||'quantity']||0}{mu}</div>
    }}
    label={props.label}
    {...props}
  />
}
QuantityField.defaultProps = { label: "common.quantity" }