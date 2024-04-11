import '../App.css';
export const Heading=(props)=>{
    return (
        <div style={{textAlign:'center',fontSize:"clamp(30px,max(2vh,2vw),60px)",fontWeight:600,color:"#0F5F4B"}}>
            {props.topic}
        </div>
    )
}