import AllUser from './components/AllUser';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import NavBar from './components/Navbar';
import NotFound from './components/NotFound'; 
import ForInterview from "./components/ForInterview";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ForInterview />} />
        <Route path="/all" element={<AllUser /> } />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;