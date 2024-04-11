import { useEffect, useState } from 'react';
import '../App.css';
import {useNavigate, useLocation,Link} from 'react-router-dom';
export const Register=(props)=>{
    const loc=useLocation();
    const nav=useNavigate();
    const [service,setService]=useState("IT Services")
    const [rev,setRev]=useState("Below $1M")
    const [num,setNum]=useState("1-10");
    return (
        <div style={{display:"flex",justifyContent:"center",}}>
           {
            loc.state && loc.state.hasOwnProperty("tech")?
            <div>
                <div><h3 style={{fontSize:30}}>Register below to hire people</h3></div>
                <form onSubmit={(e)=>{e.preventDefault();alert("Registered");}} id="tech">
                        <div><div>First name :</div><div><input type='text' required /></div></div>
                        <div><div>Last name :</div><div><input type='text' required /></div></div>
                        <div><div>Email :</div><div><input type='email' required /></div></div>
                        <div><div>Company name :</div><div><input type='text' required /></div></div>
                        <div><div>How many employees does your company have? :</div><div>             
                            <select value={num} onChange={(e)=>{e.preventDefault();setNum(e.target.value);}} style={{width:"200px"}}>
                                <option value={"1-10"} >1-10</option>
                                <option value={"10-100"} >10-100</option>
                                <option value={"100-1000"} >100 - 1000</option>
                                <option value={"1000-5000"} >1000-5000</option>
                            </select></div></div>
                        <div><div>How much does your company make annualy? :</div><div>                            
                            <select value={rev} onChange={(e)=>{e.preventDefault();setRev(e.target.value);}} style={{width:"200px",}} >
                                
                                <option value={"Below $1M"} >Below $1M</option>
                                <option value={"$1M-$100M"} >$1M - $100M</option>
                                <option value={"$100M-$500M"} >$100M - $500M</option>
                                <option value={"Above $500M"} >Above $500M</option>
                            </select></div></div> 
                            <div style={{width:"100%"}}><button type='submit' className='btnstyle'>Submit</button></div>               
                </form>
            </div>
            :
            <div>
                <div><h3 style={{fontSize:30}}>Register below to get hired soon!</h3></div>
                <form onSubmit={(e)=>{e.preventDefault();if(document.getElementById("pass").value===document.getElementById("cfn").value){alert("Registered");}else{alert("Nope");}}} id="tech">
                        <div><div>First name :</div><div><input id="fname" type='text' required /></div></div>
                        <div><div>Last name :</div><div><input id="lname" type="text" required /></div></div>
                        <div><div>Email :</div><div><input id="email" type='email' required /></div></div>
                        <div><div>Password :</div><div><input id="pass" type='password' required /></div></div>
                        <div><div>Confirm Password :</div><div><input id="cfn"  type='password' required /></div></div>
                        <div><div>Which domain do you want to work in?</div><div>             
                            <select value={service} onChange={(e)=>{e.preventDefault();setService(e.target.value);}} style={{width:"200px"}}>
                            {
                                props.services.map(serviceName=>(
                                    <option value={serviceName}>{serviceName}</option>
                                ))
                            }
                            </select></div></div>
                            <div style={{width:"100%"}}><button type='submit' className='btnstyle'>Submit</button></div>               
                </form>
            </div>
            }
        </div>
    )
}