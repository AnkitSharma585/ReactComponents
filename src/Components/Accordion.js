import { useState } from 'react';
import { GoChevronLeft, GoChevronDown } from 'react-icons/go';

function Accordion({ items }) {
  const [itemsIndex, setItemsIndex] = useState(-1);

  const handleClick = (index) => {
    if (itemsIndex === index) {
      setItemsIndex(-1);
    } else {
      setItemsIndex(index);
    }
  };

  const renderedItems = items.map((item, index) => {
    const isOpen = itemsIndex === index;
    const icons = (
      <span className='text-2xl'>
        {isOpen ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );
    return (
      <div key={item.id}>
        <div
          className='flex items-center justify-between  p-3 font-bold  border-b cursor-pointer'
          onClick={() => handleClick(index)}
        >
          {item.title}
          {icons}
        </div>
        {isOpen && <div className='p-5'>{item.content}</div>}
      </div>
    );
  });

  return <div className='rounded'>{renderedItems}</div>;
}

export default Accordion;
