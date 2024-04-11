import '../App.css';
export const Swipe=(props)=>{
    const data={
        "Data Center":"data.jpg","Collaboration":"collab.jpg","Network":"network.jpg","Technical Consulting":"technical.jpg","Service Desk Solution":"servicedesk.jpg"
    ,"DevOps Consultancy":"devop.jpg","Cybersecurity Consulting":"cyberc.jpg","IT Services Consulting":"cons.jpg"
    ,"Big Data":"bd.jpg","Mobile Apps":"ma.jpg","Software Development":"sde.png","Website Design":"webd.jpg"
    ,"Firewall Auditing":"faa.jpg","Firewall Maintenance":"firewallm.jpg","Firewall Optimization":"fo.jpg","Security Perimeter Design":"sp.jpg"
    ,"Continuous Security Testing":"cs.jpg","External Penetration Testing":"ep.jpg","Remote Working Penetration":"rw.jpg","Testing":"test.jpg","Dynamic Penetration Testing":"dp.jpg","Infrastructure Penetration Testing":"ip.jpg"
    ,"Cyber Essentials Plus":"ce.jpg","Cyber Essentials":"css.png","GDPR":"gdpr.png","HIPAA":"hipaa.jpg","ISO 27001":"iso.jpg","PCI DSS":"pci.jpg"
    ,"Threat Hunting Service":"ths.jpg","Threat Anticipation Service":"tas.jpg","Breach Management Service":"bms.jpg","Incident Analysis Service":"ias.jpg","Incident Response Service":"irs.jpg","Security Monitoring Service":"sms.jpg"
    ,"Managed Firewall Services":"mfs.jpg","Managed IT Services":"mis.jpg","Managed IT Smart Hands":"msh.jpg","Managed Penetration Testing":"mps.jpg","Managed Security Services":"mss.jpg","Noc as a Service":"noc.jpg","Soc as a Service":"soc.png"
}
    return (
    <div style={{overflowX:"scroll",display:'flex',gap:60,background:'whitesmoke',paddingTop:10,paddingInline:10}} className="scr">
        {
            props.list.map(it=>(
                <div style={{display:'flex',flexDirection:'column',height:"200px",width:"100%",justifyContent:'space-between',alignItems:'center'}}>
                    <div style={{height:"140px",}}>
                        <img loading='lazy' alt='' style={{height:"100%"}} src={`./serviceimages/${data[it]}`} />
                    </div>
                    <div style={{height:"40px",display:'flex',textAlign:'center'}}>{it}</div>
                </div>
            ))
        }
    </div>)
}