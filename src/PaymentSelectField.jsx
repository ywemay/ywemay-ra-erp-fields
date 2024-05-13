import { SelectField } from "react-admin";
import { payments } from 'ywemay-erp-choices/payments-terms'

export function PaymentSelectField(props) {
  return <SelectField
    source="payment_term"
    choices={payments}
    {...props}
    />
}

PaymentSelectField.defaultProps = { label: 'common.paymentTerm' }