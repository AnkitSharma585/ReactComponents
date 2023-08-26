import { useState } from 'react';
import Table from './Table';
import { BiUpArrow, BiDownArrow } from 'react-icons/bi';

function SortableTable(props) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const { config, data } = props;

  const handleClick = (label) => {
    if (sortOrder === null) {
      setSortOrder('asc');
      setSortBy(label);
    } else if (sortOrder === 'asc') {
      setSortOrder('desc');
      setSortBy(label);
    } else if (sortOrder === 'desc') {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  const newConfig = config.map((column) => {
    if (!column.renderValue) return column;
    return {
      ...column,
      header: () => (
        <th
          className='hover:bg-gray-200 p-2 cursor-pointer'
          onClick={() => handleClick(column.label)}
        >
          <div className='flex items-center gap-2'>
            {column.label}
            {getIcons(column.label, sortBy, sortOrder)}
          </div>
        </th>
      ),
    };
  });

  let sortedData = data;

  if ((sortBy, sortOrder)) {
    const { renderValue } = config.find((column) => column.label === sortBy);
    sortedData = [...data].sort((a, b) => {
      const valueA = renderValue(a);
      const valueB = renderValue(b);
      const reverseOrder = sortOrder === 'asc' ? 1 : -1;

      if (typeof valueA === 'string') {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    });
  }

  return <Table {...props} config={newConfig} data={sortedData} />;
}

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return (
      <div>
        <BiUpArrow />
        <BiDownArrow />
      </div>
    );
  }
  if (sortOrder === 'asc') {
    return (
      <div>
        <BiUpArrow />
      </div>
    );
  } else if (sortOrder === 'desc') {
    return (
      <div>
        <BiDownArrow />
      </div>
    );
  } else {
    return (
      <div>
        <BiUpArrow />
        <BiDownArrow />
      </div>
    );
  }
}

export default SortableTable;
