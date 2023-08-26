import { Fragment } from 'react';

function Table({ config, data }) {
  const renderedHeader = config.map((column) => {
    if (column.header) {
      return <Fragment key={column.label}>{column.header()}</Fragment>;
    }
    return (
      <th className='p-2' key={column.label}>
        {column.label}
      </th>
    );
  });

  const renderedBody = data.map((fruit) => {
    const renderedCells = config.map((cell) => {
      return (
        <td className='p-4' key={cell.label}>
          {cell.render(fruit)}
        </td>
      );
    });
    return (
      <tr className='border-b' key={fruit.name}>
        {renderedCells}
      </tr>
    );
  });

  return (
    <table className='table-auto border-spacing-4'>
      <thead>
        <tr className='border-b-4'>{renderedHeader}</tr>
      </thead>
      <tbody>{renderedBody}</tbody>
    </table>
  );
}
export default Table;
