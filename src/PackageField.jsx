import { WrapperField, NumberField, SelectField } from "react-admin";
import { packings } from "ywemay-erp-choices/packing-types";

export function PackageField (props) {
  return <WrapperField
    label="common.package"
    >
      <div className='inline-field'>
        <div><NumberField source="inner_packing_count" /></div>
        <div><SelectField source="inner_packing" choices={packings} /></div>
        *
        <div><NumberField source="inner_per_outer" /></div>
      </div>
    </WrapperField>
}

PackageField.defaultProps = { label: 'common.package' }