import Route from './Components/Route';
import Sidebar from './Components/Sidebar';
import AccordionPage from './Pages/AccordionPage';
import ButtonPage from './Pages/ButtonPage';
import CounterV1 from './Pages/CounterV1';
import CounterV2 from './Pages/CounterV2';
import DropdownPage from './Pages/DropdownPage';
import ModalPage from './Pages/ModalPage';
import TablePage from './Pages/TablePage';

function App() {
  return (
    <div className='container mx-auto my-2 grid grid-cols-6'>
      <Sidebar />
      <div className='col-span-5'>
        <Route path='/button'>
          <ButtonPage />
        </Route>
        <Route path='/'>
          <DropdownPage />
        </Route>
        <Route path='/accordion'>
          <AccordionPage />
        </Route>
        <Route path='/modal'>
          <ModalPage />
        </Route>
        <Route path='/counter1'>
          <CounterV1 />
        </Route>
        <Route path='/counter2'>
          <CounterV2 />
        </Route>
        <Route path='/table'>
          <TablePage />
        </Route>
      </div>
    </div>
  );
}
export default App;
