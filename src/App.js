import './App.css';
import Sidebar from './Sidebar';
import Header from './Header';
import Sunheader from './Sunheader';
import Tab from './Tab';
import Widgets from './Widgets';
function App() {
  return (
    <>
    <div className='maindiv'>
    <Sidebar />
    <div>
    <Header />
    <Sunheader />
    <Tab />
    <Widgets />

    </div>
    </div>
    </>
  );
}

export default App;
