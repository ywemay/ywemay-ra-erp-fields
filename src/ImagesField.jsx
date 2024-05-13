import { 
  useRecordContext,
} from "react-admin";

const { VITE_API_FILES_HOST: host } = import.meta.env;

const variants = {
   xsm: '60/60', 
   sm: '160/160', 
   md: '480/480', 
   lg: '800/800', 
   xlg: '1000/1000', 
   xxlg: '1200/1200', 
   original: '',
}

export const Image = ({variant, subdir, bucket, file_name, product_id, ...props}) => {
  const sz = variants[variant] || variants['sm'];
  const src = file_name.match(/^blob\:/) ? file_name : `${host}/${bucket || 'product'}/imgsub/${sz}/${subdir || product_id}/${file_name}`
  return <img 
    src={src} 
    title={file_name} 
    {...props} 
  />
}

export const ImageField = ({subdir:sub, source, is_image, ...props}) => {
  const record = useRecordContext();
  const file_name = record[source];
  const subdir = typeof sub === 'function' ? sub(record) : record[sub];
  const params = { file_name, subdir, 
    is_image: is_image ? is_image.toString() : true.toString(),
    ...props}
  return <Image {...params} />
}

export function ImagesField({source, src, max, bucket, variant, title, container, ...props}) {
  const record = useRecordContext();
  if (!record) return <></>
  const data = record[source];

  if (Array.isArray(data)) {
    const images = max ? data.slice(0, max) : data;
    return <div {...container}>
      {images.map(({id, ...v}) => <Image 
        key={`img-${id}`} 
        {...v} 
        variant={variant}
        bucket={bucket}
        {...props}
      />)}
      {images.length === 0 && <img src={`/no-image-${variant || 'sm'}.jpg`} title="no image" {...props} />}
    </div>
  }
  if (data === null) {
    return <img src={`/no-image-${variant || 'sm'}.jpg`} title="no image" {...props} />
  }
  const ttl = record[title] || record[source];
  return <img src={ data } title={ ttl || src } {...props} />
}