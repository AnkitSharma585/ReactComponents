import { useEffect, useRef, useState } from 'react';
import Panel from './Panel';
import { GoChevronLeft, GoChevronDown } from 'react-icons/go';

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!divEl.current) return;
      if (!divEl.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    window.addEventListener('click', handler, true);
    window.removeEventListener('click', handler);
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        onClick={() => handleOptionClick(option)}
        className='hover:bg-sky-200 rounded'
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  const icons = (
    <span className='text-2xl'>
      {isOpen ? <GoChevronDown /> : <GoChevronLeft />}
    </span>
  );

  return (
    <div ref={divEl} className='w-48'>
      <Panel
        className='flex items-center justify-between'
        onClick={handleClick}
      >
        {value ? value.label : 'Select...'}
        {icons}
      </Panel>
      {isOpen && <Panel>{renderedOptions}</Panel>}
    </div>
  );
}
export default Dropdown;
