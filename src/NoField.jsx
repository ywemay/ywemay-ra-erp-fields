import { NumberField } from 'react-admin'

export function NrField(props) {
  return <NumberField
    label="common.nr"
    source="id"
    className="flex flex-row justify-end"
    {...props}
    />
}

NrField.defaultProps = { label: 'common.nr' }