import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/Login"
import Register from "./components/Register"
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="*" element={<div>Not Found</div>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<div>Forgot Password</div>} />
          <Route path="/reset-password" element={<div>Reset Password</div>} />
        </Routes>
      </Router>
    </div>
  )
}
export default App