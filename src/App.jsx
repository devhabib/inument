import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dashboard } from "./components/Views/Dashboard"
import { About } from "./components/Views/About"
import { Sidebar } from './components/layouts/Sidebar';
import { Header } from './components/layouts/Header';
function App() {

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Sidebar>
          <Routes>
            <Route path='/' element={<Dashboard />}></Route>
            <Route path='/about' element={<About />}></Route>
          </Routes>
        </Sidebar>
      </div>

    </BrowserRouter>
  )
}

export default App
