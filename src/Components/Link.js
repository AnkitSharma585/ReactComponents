import { useContext } from 'react';
import NavigationContext from '../Context/Navigation';
import classNames from 'classnames';

function Link({ children, to, activeClass }) {
  const { navigate, currentPath } = useContext(NavigationContext);
  const handleClick = (e) => {
    if (e.metaKey || e.ctrlKey) {
      return;
    } else {
      e.preventDefault();
      navigate(to);
    }
  };

  const classes = classNames(
    'text-blue-600',
    to === currentPath && activeClass
  );

  return (
    <a className={classes} onClick={handleClick} href={to}>
      {children}
    </a>
  );
}
export default Link;
