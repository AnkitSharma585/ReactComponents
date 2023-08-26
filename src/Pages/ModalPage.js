import { useState } from 'react';
import Modal from '../Components/Modal';
import Button from '../Components/Button';

function ModalPage() {
  const [isOpen, setIsOpen] = useState(false);

  const handleModalOpen = () => {
    setIsOpen(true);
  };
  const handleModalClose = () => {
    setIsOpen(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleModalClose} danger>
        Decline
      </Button>
      <Button onClick={handleModalClose} success>
        Accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleModalClose} actionBar={actionBar}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quos
        quo temporibus labore, error illo eum accusamus. Harum architecto,
        deleniti laudantium necessitatibus nihil labore maiores nemo est,
        laborum beatae reiciendis.
        <p className='font-bold mt-2'>
          Do you agree with our terms & conditions?
        </p>
      </p>
    </Modal>
  );

  return (
    <div>
      <Button onClick={handleModalOpen} primary>
        Open Modal
      </Button>
      <div>{isOpen && modal}</div>
    </div>
  );
}
export default ModalPage;
