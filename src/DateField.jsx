import { DateField as RADateField } from 'react-admin';

export function DateField(props) {

  return <RADateField
    label="common.date"
    source="date" 
    {...props}
  />
}

DateField.defaultProps = { label: 'common.date' }