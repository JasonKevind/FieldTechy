import '../App.css';
export const CaseStudyCard=(props)=>{
    return (
        <div style={{height:"90%",width:"clamp(490px,48vw,690px)",display:'flex',flexDirection:"column",boxShadow:"3px 3px 6px #333"}}>
            <div style={{height:"100%",width:"100%",backgroundImage:`url(../${props.data.link})`,
            backgroundSize:"cover",backgroundPosition:"center",zIndex:2,alignContent:'end'}}>
                <div style={{display:'flex',flexDirection:'column',height:"34%",background:"whitesmoke",justifyContent:'space-between'}}>
                   <div style={{height:"60%",paddingBlock:10}}>
                        <div style={{padding:5}}>
                            <span style={{color:"#333",fontSize:"20px",}}>{props.data.heading}</span> 
                            <br></br><br></br>
                            <span >{props.data.info}</span>
                        </div>
                   </div>
                   <div className='ReadMore'>
                        <span style={{padding:5}}>Readmore</span>
                    </div>
                </div>
            </div>
        </div>
    )
}