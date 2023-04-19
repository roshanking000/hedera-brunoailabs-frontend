import { createPortal } from 'react-dom'

function Modal({ children, isOpen, onClose }) {
  return isOpen
    ? createPortal(
        <>
          <div className='overlay' onClick={onClose}>
            <button
              onClick={onClose}
              style={{
                width: '50px',
                height: '50px',
                position: 'absolute',
                zIndex: 200,
                top: '20px',
                right: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              className=''
              aria-label='close'
            >
              <img
                src='/icons/close-square.svg'
                style={{
                  objectFit: 'contain',
                }}
                className='w-20 h-20'
                alt='close'
              />
            </button>
            <div className='modal'>{children}</div>
          </div>
        </>,
        document.getElementById('modal-root'),
      )
    : null
}

export default Modal
