import Nav from './components/Nav';
import Home from './components/Home';
import Characters from './components/Characters';
import Episodes from './components/Episodes';
import Quotes from './components/Quotes';
import Missing from './components/Missing';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="*" element={<Missing />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;