import { useRecordContext } from "react-admin"
const { VITE_API_FILES_HOST: host } = import.meta.env;

export function ProductImageField({ source, ...props }) {
  const record = useRecordContext()
  if (!record) return null;
  const sku = record[source || 'id'];
  const url = `${host}/product/one/${sku}`
  return <img 
    crossOrigin="anonymous"
    width="120pt" hight="120pt" src={sku ? url : "/no-image.jpg"} 
    {...props} />
}