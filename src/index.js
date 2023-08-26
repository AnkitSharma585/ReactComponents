import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import { Provider } from './Context/Navigation';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Provider>
    <App />
  </Provider>
);
