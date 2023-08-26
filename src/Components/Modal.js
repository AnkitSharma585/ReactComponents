import ReactDOM from 'react-dom';

function Modal({ children, onClose, actionBar }) {
  return ReactDOM.createPortal(
    <div>
      <div className='fixed inset-0 bg-gray-600 opacity-80' onClick={onClose} />
      <div className='fixed inset-40 bg-white p-5 rounded'>
        <div className='h-full flex flex-col justify-between'>
          {children}
          <div className='flex justify-end'>{actionBar}</div>
        </div>
      </div>
    </div>,
    document.querySelector('.modal-container')
  );
}
export default Modal;
