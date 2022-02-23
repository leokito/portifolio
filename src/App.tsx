import { BrowserRouter as Router  } from 'react-router-dom';
import Contact from './components/Contact';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
