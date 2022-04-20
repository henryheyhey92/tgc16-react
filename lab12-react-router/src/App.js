import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import ContactUs from './pages/Contact';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <Router>
      {/* any JSC elements here will stay from page to page */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/about" element={<About/>} />
  <Route path="/contact" element={<Contact/>} />
  <Route path="/submitted-form" element/>
</Routes>

    </Router>
  );
}

export default App;
