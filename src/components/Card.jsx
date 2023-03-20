import React, { useContext } from 'react';
import { AdvancedImage } from '@cloudinary/react';
import { fill } from '@cloudinary/url-gen/actions/resize';
import { lazyload, placeholder } from '@cloudinary/react';
import { cld } from '../utils/cloudinary';
import AppContext from '../context/AppContext';
import '../styles/Card.scss';

export default function Card({ product, width, height }) {
  const { setOpenModal, setItem } = useContext(AppContext);

  const projectImage = cld.image(`Portfolio/Projects/${product.image}`).resize(fill().width(width).height(height));

  const handleClick = () => {
    setOpenModal();
    setItem(product)
  }

  return (
    <>
      <div className="card" onClick={handleClick}>
        <div className="tools">
          <div className="circle">
            <span className="red box"></span>
          </div>
          <div className="circle">
            <span className="yellow box"></span>
          </div>
          <div className="circle">
            <span className="green box"></span>
          </div>
        </div>
        <div className="card__content">
          <div className='Card-container' >
            <div className="Card-container_Image">
              <AdvancedImage cldImg={projectImage} alt={product.name} plugins={[lazyload({ rootMargin: '10px 20px 10px 30px', threshold: 0.15 }), placeholder()]} />
            </div>

            <h3>{product.name}</h3>
            {product.technology.slice(0, 3).map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
      </div>
      {/*  */}
    </>
  )
}
