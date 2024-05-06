import logo from './logo.svg';
import './App.css';
import { Routes ,Route, useNavigate} from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";

function App() {
  const navigate=useNavigate()
  return (
    <Routes>
    <Route path="/" element={<div>homepage
      <button onClick={()=>{
        navigate('/test')
      }}>test</button>
    </div>} />
    <Route path="/story" element={<div>story</div>} />
    <Route path="/test" element={<div>test</div>} />
    <Route path="/getId/:id" element={<div>get by id </div>} />
    <Route path="/getId/test/" element={<div>getid/test</div>} />
    <Route path="*" element={<div>not found</div>} />
    </Routes>
  );
}

export default App;
