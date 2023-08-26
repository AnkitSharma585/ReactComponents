import { useState } from 'react';
import Dropdown from '../Components/Dropdown';

function DropdownPage() {
  const [selected, setSelected] = useState(null);
  const options = [
    {
      value: 'red',
      label: 'Red',
    },
    {
      value: 'green',
      label: 'Green',
    },
    {
      value: 'blue',
      label: 'Blue',
    },
  ];
  return <Dropdown value={selected} onChange={setSelected} options={options} />;
}
export default DropdownPage;
