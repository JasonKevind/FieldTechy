import React, { useState, useRef, useEffect } from 'react';
import { Swipe } from './Swipe';
import { WhyUs } from './WhyUs';
import { MapContainer, TileLayer, Popup, GeoJSON, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../MyMap.css';
import {useLocation,useNavigate} from 'react-router-dom';
import mapData from "../data/countries.json";
import countries from "../data/datum.json";
import { Process } from './Process';
import { CaseStudy } from './CaseStudy';
import { Heading } from './Heading';
const MAP_CENTER = [52.52, 13.405];
const DEFAULT_ZOOM = 2; // Default zoom level for the entire world
export const Home=(props)=> {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const mapRef = useRef(null);
  const data={"IT Services":["Collaboration","Data Center","Network","Technical Consulting","Service Desk Solution"]
  ,"Consultancy Services":["DevOps Consultancy","Cybersecurity Consulting","IT Services Consulting"]
  ,"Software":["Big Data","Mobile Apps","Software Development","Website Design"],
  "Managed Services":["Managed Firewall Services","Managed IT Services","Managed IT Smart Hands","Managed Penetration Testing","Managed Security Services","Noc as a Service","Soc as a Service"],
  "Cyber Security":["Threat Hunting Service","Threat Anticipation Service","Breach Management Service","Incident Analysis Service","Incident Response Service","Security Monitoring Service"],
  "Firewall Security":["Firewall Auditing","Firewall Maintenance","Firewall Optimization","Security Perimeter Design"],
  "Penetration Testing":["Continuous Security Testing","External Penetration Testing","Remote Working Penetration","Testing","Dynamic Penetration Testing","Infrastructure Penetration Testing"],
  "Compliance":["Cyber Essentials Plus","Cyber Essentials","GDPR","HIPAA","ISO 27001","PCI DSS"]
}
const nav=useNavigate();
const services=props.services;
const [service,setService]=useState("IT Services");
const [pos,setPos]=useState(null);
let countryOptions=[];
  for(var i=0;i<countries.ref_country_codes.length;i++){
      countryOptions.push({value:countries.ref_country_codes[i].alpha2,label:countries.ref_country_codes[i].country})
  }
  let latlng={};
  for(var j=0;j<countries.ref_country_codes.length;j++){
      latlng[countries.ref_country_codes[j].alpha2]=[countries.ref_country_codes[j].latitude,countries.ref_country_codes[j].longitude];
  }
const handleCountrySelect = (event) => {
  setSelectedCountry(event.target.value);
};
  const loc=useLocation();
  // Replace this function with your own logic to get coordinates for each country
  const getCoordinatesForCountry = (countryCode) => {
    // Example: Return hardcoded coordinates for Germany, France, and Italy
    return latlng[countryCode];
  };
  const [rev,setRev]=useState("Below $1M");

  useEffect((e)=>{
    document.getElementById(service).style.backgroundColor="#0F5F4B";
},[loc.pathname])
  return (
    <div className="App">
       <div style={{position:"relative",height:"200px"}}>
       <div class="custom-shape-divider-top-1712838020">
       <p>
         Requiring an engineer? IN need of a job?
         <br></br>
         We can make it easy.
         <br></br>
         <button id="hiretech" onClick={(e)=>{e.preventDefault();nav("/Register",{state:{"tech":"1"}});}}>Hire an engineer</button> <button onClick={(e)=>{e.preventDefault();nav("/Register",{state:{"nope":"1"}})}}  style={{cursor:"pointer",border:"1px solid whitesmoke",paddingBlock:7.5,paddingInline:10}}>Find a job</button>
       </p>
       

    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill">   
        </path>

    </svg>
</div> 
       </div>
       {/*Services offered*/}
       <div style={{gap:20,display:'flex',flexDirection:'column',height:"clamp(350px,40vh,480px)"}} >
            <div style={{gap:20,display:'flex',flexDirection:'column'}}>
                <Heading topic={"Services we offer"} />
                <div style={{display:"flex",height:"105px",width:'100%',flexDirection:'column'}}>
                    <div id="services" style={{display:'flex',justifyContent:'space-evenly',flexWrap:'wrap'}}>
                    {
                      services.map(nameOfService=>(
                        <p id={nameOfService} onClick={(e)=>{e.preventDefault();
                          document.getElementById(nameOfService).style.backgroundColor="#0F5F4B";
                          document.getElementById(nameOfService).style.transition="0.3s";
                          document.getElementById(service).style.backgroundColor="gainsboro";
                          document.getElementById(service).style.transition="0.3s";
                          setService(nameOfService)}}>{nameOfService}</p>
                      ))
                    }
                    </div>
                    <div style={{width:"100%"}}>
                        <Swipe list={data[service]} />
                    </div>
                </div>    
            </div>   
        </div>
     

      {/*Map*/}
      <div style={{display:'flex',justifyContent:'center',flexDirection:"column",justifyContent:"center",alignItems:"center",}}>
      <div style={{height:"370px",display:"flex",flexDirection:"column",margin:0,padding:0,justifyContent:"center",alignItems:"center"}}>
      <div style={{display:"flex",justifyContent:"space-around",position:"relative",top:"3.5vh",zIndex:1000,gap:20,margin:0,padding:0,}}>
      <div style={{zIndex:1000,padding:0,margin:0}}>
                <select style={{zIndex:100}} onChangeCapture={handleCountrySelect}>
                    <option value="">Select a country</option>
                    {countryOptions.map((country) => (
                        (country.label!=="Antarctica")?
                        <option key={country.value} value={country.value}>
                        {country.label}
                    </option>:null
                ))}
                </select>
            </div>
            
            <div style={{zIndex:1000}}>
                <select onChangeCapture={(e)=>{setPos(e.target.value);}}>
                    <option value="">Select a service</option>
                    {services.map((servic) => (
                        <option key={servic} value={servic}>
                        {servic}
                    </option>
                ))}
                </select>
            </div>
            </div>
      <MapContainer
        whenCreated={(map) => {
          mapRef.current = map;
        }}
        style={{zIndex:1, height: '370px',width:"600px",padding:0,margin:0 }}
        center={MAP_CENTER}
        zoom={DEFAULT_ZOOM}
        maxBounds={[
            [190, -180], // Top-left corner (latitude, longitude)
            [-90, 180], // Bottom-right corner (latitude, longitude)
          ]}
      >
        <TileLayer noWrap id="tc"  
          attribution='© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          
        />
        {/* Render the selected country's marker and popup */}
        {pos && selectedCountry && (
            <Popup  position={getCoordinatesForCountry(selectedCountry)}>{""+(Math.abs(Math.round(latlng[selectedCountry][0])-(Math.ceil(pos.length/2))))}</Popup>
        )}
        <GeoJSON style={{color:"transparent",fillOpacity:0,fillColor:"tranparent"}} data={mapData.features} onEachFeature={(feature,layer)=>{
            layer.on({mousedown:(event)=>{
                layer.bindPopup(""+(2*(1+Math.abs(Math.round(latlng[feature.id][0])))))
            }})
           
        }}>
          
        </GeoJSON>
      </MapContainer>
      </div>
      </div>
      
       {/*Description on how to use selectors and map*/}
      <div style={{justifyContent:"center",textAlign:"center"}}>
          <small>You can <span style={{fontWeight:700,color:"#0F5F4B",fontSize:17.5}}>click on a country</span> to look at the number of people who have registered from that particular location.<br></br>You can also use the two menus below to <span style={{fontWeight:700,color:"#0F5F4B",fontSize:17.5}}>FILTER ACCOURDINGLY</span></small>
      </div>
        {/*Processes to hire a tech person*/}
        <div style={{height:"clamp(100px,11vh,160px)",alignItems:"center",justifyContent:"center"}}>
                    <Heading topic={"Processes for Companies/Business Owners"} />
        </div>
        <div>
            <Process />
        </div>
      {/*The part which shows two divs on why to choose*/}
      <div style={{height:"clamp(100px,11vh,160px)",alignItems:"center",justifyContent:"center"}}>
          <Heading topic={"How can you be benefited? / Why to choose us?"} />
      </div>
      <div>
        <WhyUs/>
      </div>
      
        {/*Form to post a job*/}
        <div className='register'>
                    <div style={{display:"flex",}}>
                      <div style={{height:"30%"}}>
                          <h1 style={{textAlign:"left",color:"#0F5F4B",margin:0,padding:0}}>Find the right fit for your business/company</h1>
                      </div>
                      <div style={{height:"25%"}}>
                          <p>Join the thousands of field service organizations who trust Field Nation to help them get work done. Contact us today to start leveraging the savings, efficiency, and growth that only on-demand labor can provide.</p>
                      </div>
                      <div style={{height:"45%",display:'flex',width:'100%',justifyContent:'space-around',alignItems:'center'}}>
                          <div style={{textAlign:'center'}}>
                              <span style={{fontSize:40,color:"#0F5F4B"}}>700 k+</span>
                              <br></br>
                              <span style={{color:'#333'}}>Work Orders Completed</span>
                          </div>
                          <div style={{transform:"scaleY(3)"}}>
                            |
                          </div >
                          <div style={{textAlign:'center'}}>
                              <span style={{fontSize:40,color:"#0F5F4B"}}>200k +</span>
                              <br></br>
                              <span style={{ color:'#333'}}>Tech People around the world</span>
                          </div>
                      </div>
                    </div>
                    <div style={{color:"blue",gap:50,}}>
                      <div><span style={{color:"#0F5F4B",textAlign:"left",margin:0,padding:0,fontSize:25}}>If you are looking for a tech person, post it through the below form</span></div>
                      <form onSubmit={(e)=>{e.preventDefault();alert("Registered")}}>
                        <div style={{gap:17,display:'flex',width:'100%',flexWrap:"wrap",}}>
                            <div><span>Name</span><br></br>
                            <input required type='text' style={{width:"200px",height:"22px"}} />
                            </div><div><span>Email</span><br></br>
                            <input required type="email" style={{width:"200px",height:"22px"}} />
                            </div><div><span>Company Name</span><br></br>
                            <input required type='text' style={{width:"200px",height:"22px"}} />
                            </div>
                            <div><span>What's your company's annual revenue</span><br></br>
                            <select value={rev} onChange={(e)=>{e.preventDefault();setRev(e.target.value);}} >
                                <option value={"Below $1M"} >Below $1M</option>
                                <option value={"$1M-$100M"} >$1M - $100M</option>
                                <option value={"$100M-$500M"} >$100M - $500M</option>
                                <option value={"Above $500M"} >Above $500M</option>
                            </select>
                            </div>
                            <div style={{width:"100%"}}>
                              <button type='submit' className='btnstyle' style={{width:"100px"}}>Submit</button>
                            </div>
                      </div>
                      </form>
                   
                    </div>
        </div>
        {/*Case Study*/}
        <div>
            <CaseStudy />
        </div>
    </div>
  );
}