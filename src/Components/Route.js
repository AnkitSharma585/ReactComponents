import { useContext } from 'react';
import NavigationContext from '../Context/Navigation';

function Route({ children, path }) {
  const { currentPath } = useContext(NavigationContext);
  if (currentPath === path) {
    return children;
  } else return null;
}
export default Route;
