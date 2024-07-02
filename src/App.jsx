import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/Login"
import Register from "./components/Register"
import '@progress/kendo-theme-default/dist/all.css';
import Compression from './components/Compression/Compression';
import ImageGallery from './components/ImageGallery/ImageGallery.jsx';
import MemoryDetail from './components/ImageGallery/MemoryDetail';
import GetAllEvents from './pages/GetAllEvents.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Layout from './components/Layout.jsx'
import Events from './pages/Events.jsx';
import Moments from './pages/Moments.jsx';
import Clients from './pages/Clients.jsx';
import ClientDetail from './pages/ClientDetail.jsx';
import Contact from './pages/Contact.jsx';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/compression' element={<Compression />} />
          <Route path='/image-gallery' element={<ImageGallery />} />
          <Route path="/moments" element={<Moments />} />
          <Route path="/moments/:id" element={<Moments />} />
          <Route path='/getallevents' element={<GetAllEvents />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/events' element={<Events />} />
          <Route path='/events/:id' element={<Events />} />
          <Route path='/Clients' element={<Clients />} />
          <Route path='/clients/:id' element={<ClientDetail />} />
          <Route path='/memory/:id' element={<MemoryDetail />} />
          <Route path='*' element={<h1>Not Found</h1>} />
          <Route path='/about' element={<h1>About</h1>} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/' element={<h1>Home</h1>} />
        </Routes>
      </Layout>
    </Router>
  )
}
export default App