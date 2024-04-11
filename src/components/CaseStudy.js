import '../App.css';
import { CaseStudyCard } from './CaseStudyCard';
export const CaseStudy=()=>{
    const data=[
        {heading:"Is Your Data Safe?",info:"Find out about various data breaching incidents.",link:"cybersecurity.jpg"},
        {heading:"Penetration Testing",info:"Why you might need it in your application.",link:"pen.jpg"},
        {heading:"Spend Wisely",info:"Devops can enhance your application.",link:"devops.jpg"}
    ]
    return (
        <div style={{width:"100%",gap:80,overflowX:"scroll",height:"clamp(500px,58vh,700px)",display:'flex',background:'transparent'}}>
            {
                data.map(item=>(
                    <CaseStudyCard data={item} />
                ))
            }
        </div>
    )
}