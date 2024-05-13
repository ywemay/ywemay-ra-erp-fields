import { 
  SelectField,
} from "react-admin";

import { units } from "ywemay-erp-choices/units";

export function SelectMUField(props) {
  return <SelectField
    label="common.mu"
    choices={units}
    source="mu"
    {...props}
    />
}

SelectMUField.defaultProps = {
  label: 'common.mu'
}