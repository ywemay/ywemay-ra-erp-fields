import { 
  ReferenceField,
  TextField,
} from "react-admin";
import { ProductImageField } from "./ProductImageField";

export function ProductReferenceImageField({children, ...props}) {
  return <ReferenceField
    label="products.product"
    reference="products"
    link="show"
    source="product_id"
    {...props}
    >
    <div className="flex flex-row gap-2">
      <ProductImageField />
      <div className="flex flex-col gap-1">
        <TextField source="id" />
        <TextField source="title" />
        {children}
      </div>
    </div>
  </ReferenceField>
}

ProductReferenceImageField.defaultProps={ label: 'products.product' }