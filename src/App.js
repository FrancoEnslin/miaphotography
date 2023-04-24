import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Pages/Main';
import Projects from './Pages/Projects';

function App() {
  return (
    <div className='App'>
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/faq" element={<FAQ />} /> */}
      </Routes>
    </BrowserRouter>
    </div>
  
  );
}

export default App;
