import { BrowserRouter as Router  } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
