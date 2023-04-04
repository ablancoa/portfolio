import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import ProductDetail from '../../components/ProductDetail';
import AppContext from '../../context/AppContext';
import '../../styles/Modal.scss'

function Modal() {

  const { modal, setOpenModal, item, setItem } = useContext(AppContext);
  const [openAnimation, setOpenAnimation] = useState(true)

  const setAnimation = (state) => {
    setOpenAnimation(state)
  }

  const handleClick = () => {
    setAnimation(false);
    setTimeout(setOpenModal, 480);
    setTimeout(() => {
      setAnimation(true);
      setItem("")
    }, 500);
  }

  const handleProductClick = (event) => {
    event.stopPropagation();
  }

  if (modal) {
    document.documentElement.classList.add('no-scroll');
    return ReactDOM.createPortal(
      <div className='Modal' onClick={handleClick}>
        <div className={`Modal__content ${!openAnimation ? "close-animation" : "start-animation"}`} onClick={handleProductClick}>
          <ProductDetail product={item} />
        </div>
      </div>,
      document.getElementById('modal')
    )
  } else {
    document.documentElement.classList.remove('no-scroll');
  }

}


export default Modal;