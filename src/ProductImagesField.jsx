import { useRecordContext } from "react-admin"
import { httpFilesClient } from "ywemay-ra-utils";
import { useEffect, useState } from "react";
const { VITE_API_FILES_HOST: host } = import.meta.env;

function ImageWrapper ({children, selected, ...props}) {
  if (selected) return <div className="thumb-image selected" {...props}>{children} </div>
  return <div className="thumb-image" {...props}>{children} </div>
}

export function ProductImagesField({sku: skuProp, source, ...props}) {
  const [ imgIndex, setImgIndex ] = useState(0);
  const [ mainSrc, setMainSrc ] = useState('/no-image.jpg');
  const [ sku, setSKU ] = useState(skuProp);
  const [ images, setImages ] = useState([])
  const record = useRecordContext()
  
  useEffect(() => {
    if (record) setSKU(source ? record[source] : record.id);
    if (!sku) return;
    const uri = `product/list/${sku}`
    httpFilesClient(uri).then(({json}) => {
      const { files } = json;
      setImages(files || [])
    })
  }, [sku, record])

  const makeMainSrc = () => `${host}/product/imgsub/480/480/${sku}/${images[imgIndex]}`

  useEffect(() => {
    if (images.length > 0) setMainSrc(makeMainSrc(0));
  }, [images, imgIndex])

  return <div {...props}>
    <div className="flex flex-col gap-3" height="480pt">
    { images.length > 0 && <div>
      <img 
        crossOrigin="anonymous"
        height="480pt"
        src={mainSrc} 
        />
    </div> }
    <div className="flex flex-row gap-1">

    {images.map((im, index) => {
    return <ImageWrapper
      key={`image-${index}`}
      onClick={() => setImgIndex(index)}
      selected={index === imgIndex}
      ><img 
        crossOrigin="anonymous"
        src={`${host}/product/imgsub/80/80/${sku}/${im}`} 
        /></ImageWrapper>
    })}
    </div>
    </div>
  </div>
}