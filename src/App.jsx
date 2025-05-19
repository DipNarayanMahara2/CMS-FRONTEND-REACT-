import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './Auth/Login';
import Register from './Auth/Register';
import CreateBlog from './pages/CreateBlog/CreateBlog';
import SingleBlog from './pages/SingleBlog/SingleBlog';
import UpdateBlog from './pages/UpdateBlog/UpdateBlog';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blog/add" element={<CreateBlog />} />
        <Route path="/blog/update/:id" element={<UpdateBlog />} />
        <Route path="/blog/:id" element={<SingleBlog />} />
        {/* Add more routes here */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
