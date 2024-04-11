import '../App.css';
import {useNavigate} from 'react-router-dom';
export const Header=()=>{
    const nav=useNavigate();
    return (<div className='Header'>
       <div>
            <div>
                <div style={{width:"clamp(100px,22%,270px)"}}>
                    <img onClick={(e)=>{e.preventDefault();nav("/");}} loading='lazy' src={require("../loggo.png")} style={{height:'100%',width:"100%"}}  />
                </div>
            </div>
            <div>
                <div onClick={(e)=>{e.preventDefault();nav("/");}}>Home</div>
                <div>Services</div>
                <div>About Us</div>
                <div>Contact Us</div>
            </div>
       </div> 
       <div>
            
            <div style={{color:"whitesmoke",display:"flex",justifyContent:"center",width:"100%"}}>
                <button className='bt' id="b1">Login</button>
            </div>
       </div>
    </div>)
}