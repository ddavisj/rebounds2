import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import './App.css';

import Header from './components/Header';

import Rebounds from './pages/Rebounds';
import Points from './pages/Points';

import stats from './stats.json';

function App() {
   return (
      <>
         <BrowserRouter>
            <Header />
            <div className="container mt-2" style={{ marginTop: 40 }}>
               <Routes>
                  <Route path="/" element={<Rebounds stats={stats} />} />
                  <Route path="/points" element={<Points stats={stats} />} />
               </Routes>
            </div>
         </BrowserRouter>
      </>
   );
}

export default App;
