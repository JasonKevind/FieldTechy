import '../App.css';
import {useNavigate} from 'react-router-dom';
import { BsWhatsapp } from "react-icons/bs";
import { MdCall } from "react-icons/md";
import { CiMail } from "react-icons/ci";
export const Footer=(props)=>{    
    const nav=useNavigate();
    return(
        <div style={{padding:10,justifyContent:"space-evenly",height:"clamp(250px,27vh,350px)",width:"100%",background:"linear-gradient(to bottom, #0F5F4B, #09152F)",display:"flex"}}>
            <div style={{display:'flex',flexDirection:'column',justifyContent:'space-evenly',width:"40%"}}>
                <div style={{display:'flex',alignItems:'center'}}>
                    <div style={{width:"clamp(100px,22.5%,270px)"}}>
                        <img onClick={(e)=>{e.preventDefault();nav("/");}} loading='lazy' src={require("../loggo.png")} style={{height:'100%',width:"100%"}}  />
                    </div>
                
                </div>
                <div >
                    <p style={{color:"whitesmoke"}}>
                        You can contact us for any queries through contact number or even mail us.
                    </p>
                </div>
                <div style={{display:'flex',gap:30}}>
                    <MdCall color={"whitesmoke"} size={"4vh"} />
                    <BsWhatsapp color={"whitesmoke"} size={"4vh"} />
                    <CiMail color={"whitesmoke"} size={"4vh"} />
                </div>
            </div>
            <div style={{width:"40%"}}>
                <h3 style={{color:"white"}}>SERVICES</h3>
                <div style={{display:'flex',flexDirection:"column",flexWrap:"wrap"}}>
                {
                  props.services.map(serviceName=>(
                    <p style={{margin:1,padding:0,color:"whitesmoke"}}>{serviceName}</p>
                  ))  
                }
                </div>
            </div>   
        </div>
    )
}