import { 
  ReferenceField,
} from "react-admin";

export function CustomerReferenceField(props) {
  return <ReferenceField
    link="show"
    source="customer_id"
    reference="customers"
    {...props}
    >
    </ReferenceField>
}

CustomerReferenceField.defaultProps = { link: "show", label: 'customers.customer' }