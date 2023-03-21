import React from 'react';
import { AdvancedImage } from '@cloudinary/react';
import { fill } from '@cloudinary/url-gen/actions/resize';
import { cld } from '../utils/cloudinary';
import '../styles/ProductDetail.scss'

export default function ProductDetail({ product }) {
  const projectImage = cld.image(`Portfolio/Projects/${product.image}`).resize(fill().width(350).height(200));
  return (
    <div className='Product-detail'>
      <div className="Product-header">
        <AdvancedImage cldImg={projectImage} />
        <div className="Product-title">
          <h2>{product.name}</h2>
          <div className="Technologies">
            {product.technology.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
      </div>
      <h3>Descripción del proyecto</h3>
      <p>{product.description}</p>
      {product.url && (<button><a href={product.url}>Ir al proyecto</a></button>)}

    </div>
  )
}
