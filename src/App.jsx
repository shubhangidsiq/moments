import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/Login"
import Register from "./components/Register"
import '@progress/kendo-theme-default/dist/all.css';
import Compression from './components/Compression/Compression';
import ImageGallery from './components/ImageGallery/ImageGallery.jsx';
import MemoryDetail from './components/ImageGallery/MemoryDetail';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/compression' element={<Compression />} />
          <Route path='/image-gallery' element={<ImageGallery />} />
          <Route path="/memory/:id" element={<MemoryDetail />} />
        </Routes>
      </Router>
    </div>
  )
}
export default App