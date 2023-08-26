import SortableTable from '../Components/SortableTable';

function TablePage() {
  const config = [
    {
      label: 'Fruits',
      render: (fruit) => fruit.name,
      renderValue: (fruit) => fruit.name,
    },
    {
      label: 'Colors',
      render: (fruit) => <div className={`p-2 m-2 ${fruit.color}`} />,
    },
    {
      label: 'Scores',
      render: (fruit) => fruit.score,
      renderValue: (fruit) => fruit.score,
    },
  ];
  const data = [
    {
      name: 'Orange',
      color: 'bg-orange-500',
      score: 5,
    },
    {
      name: 'Apple',
      color: 'bg-red-400',
      score: 2,
    },
    {
      name: 'Cherry',
      color: 'bg-red-700',
      score: 4,
    },
    {
      name: 'Lime',
      color: 'bg-lime-300',
      score: 3,
    },
    {
      name: 'Papaya',
      color: 'bg-yellow-500',
      score: 1,
    },
  ];
  return <SortableTable config={config} data={data} />;
}
export default TablePage;
