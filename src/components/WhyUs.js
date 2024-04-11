import '../App.css';
import { ProcessCard } from './ProcessCard';
export const WhyUs=()=>{
    return (
        <div className='WhyUs'>
            <ProcessCard num={1} heading={"Save your time"} info={"We have professionals who have mastered in specific domains who can get the work done within a short time span. Following that reason comes your way to start earning through your business at a faster phase."}  link={"https://www.keytostudy.com/wp-content/uploads/2021/05/time-is-money-md.jpg"}/>
            <ProcessCard num={2} heading={"Long term benefits"} info={"We have clients all around who have been with us for a long time expirencing the long term  benefits."} link={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8FZr-fjLrWf5e8fZXeEfP-DH02tYK6Znf6P2F1hQGTA&s"} />
        </div>
    )
}