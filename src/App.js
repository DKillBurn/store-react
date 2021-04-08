import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

import Layout from './Components/UI/Page/Layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
