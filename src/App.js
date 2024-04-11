import './App.css';
import { Register } from './components/Register';
import {Route,Routes} from "react-router-dom";
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Footer } from './components/Footer';
function App() {
  const services=["IT Services","Consultancy Services","Software","Firewall Security","Penetration Testing","Compliance","Cyber Security","Managed Services"];
  return (
    <div style={{width:"100%",}}>
      <Header services={services} />
        <Routes>
            <Route path="/" element={<Home services={services}/>} />
            <Route path='/Register' element={<Register services={services}/>} />
            <Route path='*' element={<Home services={services} />} />
        </Routes>
      <Footer services={services}/>
    </div>
  );
}
export default App;