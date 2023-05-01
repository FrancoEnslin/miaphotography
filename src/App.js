import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Main from './Pages/Main';
import Projects from './Pages/Projects';
import NotFound from './Pages/NotFound';

function App() {

  // const NotFound = () => {
  //   return (
  //     <div className='App' style={{height:"100%"}}>
  //       <h1>404 - Page Not Found</h1>
  //       <p>Sorry, the page you are looking for could not be found.</p>
  //       <p>Here are some helpful links:</p>
  //       <Link to='/'>Home</Link>
  //       <br />
  //       <Link to='/projects'>Projects</Link>
  //     </div>


  //   );
  // };


  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/projects" element={<Projects />} />
          {/* <Route path="/faq" element={<FAQ />} /> */}
          {/* This is where magic happens */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
