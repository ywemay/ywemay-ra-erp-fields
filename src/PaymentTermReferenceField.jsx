import { SelectField } from "react-admin";
import { payments } from 'ywemay-erp-choices/payments-terms'

export function PaymentTermReferenceField(props) {
  return <SelectField
    source="payment_term"
    choices={payments}
    />
}

PaymentTermReferenceField.defaultProps = { label: 'common.paymentTerm' }