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
            <div>
                <button className='bt' id='hiretech' onClick={(e)=>{e.preventDefault();nav("/Register",{state:{"tech":"1"}})}} >Hire a Tech</button>
                <button className='bt' onClick={(e)=>{e.preventDefault();nav("/Register",{state:{"hire":"1"}})}}>Register as a tech</button>
            </div>
            <div style={{color:"whitesmoke"}}>
                <button className='bt' id="b1">Login</button> <span style={{transform:"scaleY(1.4)"}}>|</span> 
                <button className='bt' id="b2">Register</button>
            </div>
       </div>
    </div>)
}