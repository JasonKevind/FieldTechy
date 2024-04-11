import '../App.css';
export const ProcessCard=(props)=>{
    return (
        <div className='ProcessCard'>
            <div>
                <img alt='' style={{width:"100%",borderTopLeftRadius:10,borderTopRightRadius:10,height:"100%"}} src={props.link} loading='lazy' />
            </div>
            <div style={{display:'flex',flexDirection:'column'}}>
                <h2 style={{margin:0,padding:5,color:'#09152F'}}>{props.num}.{props.heading}</h2>
                <p style={{margin:0,padding:5,textAlign:'justify',color:"#333",fontSize:"88%"}}>{props.info}</p>
            </div>
        </div>
    )
}