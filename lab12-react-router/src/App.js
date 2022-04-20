import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import SubmittedForm from './pages/SubmittedForm';


import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import PostPage from './pages/PostPage';

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
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/form-submitted" element={<SubmittedForm />} />
        {/* <Route path="/posts/:post_id" element={<PostPage />} /> */}
        <Route path="/posts" element={<PostPage/>} />
      </Routes>

    </Router>
  );
}

export default App;
