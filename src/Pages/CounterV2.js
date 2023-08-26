import { useReducer } from 'react';
import Button from '../Components/Button';

const HANDLE_INCREMENT = 'handle_increment';
const HANDLE_DECREMENT = 'handle_decrement';
const HANDLE_SUBMIT = 'handle_submit';
const HANDLE_CHANGE = 'handle_change';

function reducer(state, action) {
  switch (action.type) {
    case HANDLE_INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case HANDLE_DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    case HANDLE_CHANGE:
      return {
        ...state,
        addValue: action.payload,
      };

    case HANDLE_SUBMIT:
      return {
        ...state,
        count: state.count + state.addValue,
        addValue: 0,
      };
    default:
      return state;
  }
}

function CounterV2() {
  const [state, dispatch] = useReducer(reducer, {
    count: 10,
    addValue: 0,
  });

  const handleIncrment = () => {
    dispatch({
      type: HANDLE_INCREMENT,
    });
  };

  const handleDecrement = () => {
    dispatch({
      type: HANDLE_DECREMENT,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: HANDLE_SUBMIT,
    });
  };

  const handleChange = (e) => {
    const value = parseInt(e.target.value);
    dispatch({
      type: HANDLE_CHANGE,
      payload: value,
    });
  };

  return (
    <div className='flex flex-col items-center justify-center gap-2'>
      <h1 className='text-2xl font-bold text-gray-700'>Counter App V2</h1>
      <h3 className='font-bold '>Count is {state.count}</h3>
      <div>
        <Button onClick={handleDecrement} danger>
          Decrement
        </Button>
        <Button onClick={handleIncrment} success>
          Increment
        </Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Add a lot:</label>
        <input
          value={state.addValue || ''}
          type='number'
          className='px-3 py-1.5 m-2 p-1 border border-gray-500 bg-gray-50'
          onChange={handleChange}
        />
        <Button secondary>Add!</Button>
      </form>
    </div>
  );
}
export default CounterV2;
