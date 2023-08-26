import Link from './Link';

function Sidebar() {
  const Links = [
    {
      path: '/',
      label: 'Dropdown',
    },
    {
      path: '/button',
      label: 'Button',
    },
    {
      path: '/accordion',
      label: 'Accordion',
    },
    {
      path: '/modal',
      label: 'Modal',
    },
    {
      path: '/table',
      label: 'Table',
    },
    {
      path: '/counter1',
      label: 'CounterV1',
    },
    {
      path: '/counter2',
      label: 'CounterV2',
    },
  ];
  const renderedLinks = Links.map((Links) => {
    return (
      <Link
        activeClass='font-bold border-l-4 border-blue-600 pl-2'
        to={Links.path}
        key={Links.label}
      >
        {Links.label}
      </Link>
    );
  });
  return (
    <div className='flex flex-col items-start overflow-y-scroll gap-2'>
      {renderedLinks}
    </div>
  );
}

export default Sidebar;
