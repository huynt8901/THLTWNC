import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Login from './Login';
import Hello from './Hello';
import Car from './Car';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hello" element={<Hello />} />
        <Route path="/car" element={<Car />} />
        <Route path="*" element={<p>Không tìm thấy trang web theo yêu cầu</p>} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
