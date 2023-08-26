import { useState } from 'react';
import Button from '../Components/Button';

function CounterV1() {
  const [count, setCount] = useState(10);
  const [addValue, setAddValue] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCount(count + addValue);
    setAddValue('');
  };

  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    setAddValue(value);
  };

  return (
    <div className='flex flex-col gap-2 items-center justify-center'>
      <h1 className='font-bold text-2xl text-gray-700'>Counter App</h1>
      <h3 className='font-bold'>Counter is {count}</h3>
      <div>
        <Button onClick={handleDecrement} danger>
          Decrement
        </Button>
        <Button onClick={handleIncrement} success>
          Increment
        </Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Add a lot:</label>
        <input
          className='m-2 p-1 border border-gray-500 bg-gray-50 '
          type='number'
          value={addValue || ''}
          onChange={handleChange}
        />
        <Button primary>Add!</Button>
      </form>
    </div>
  );
}
export default CounterV1;
