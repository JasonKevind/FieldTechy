import '../App.css';
import { ProcessCard } from './ProcessCard';
export const Process=()=>{
    const data1=[
    {num:1,heading:"Post Work",info:"Simply log onto the website, enter the work order and required skills, and receive responses immediately",link:"https://previews.123rf.com/images/ouhdesire/ouhdesire1604/ouhdesire160400266/55934693-laptop-with-coffee-cup-instant-photos-and-sticky-note-paper-with-notepad-on-old-wooden-table.jpg"},
    {num:2,heading:"Choose Tech",info:"Quickly filter technicians according to required job skills, location and choose the best.",link:"https://miro.medium.com/v2/resize:fit:820/0*Toy4_NxJxceUoZ-E.jpg"},
    ]
    const data2=[
    {num:3,heading:"Review & approve work",info:"Review to ensure the work met your expectations.",link:"https://media.istockphoto.com/id/633114032/photo/happy-smiling-man-giving-thumbs-up.jpg?s=612x612&w=0&k=20&c=scmM6DY6mPrOa5zN_O_DjeQ6OEOIZBWUMxexooxhgq8="},
    {num:4,heading:"Make Payment",info:"Make payment through any one of the above platform.",link:"https://t4.ftcdn.net/jpg/04/19/95/85/360_F_419958510_5RWBOEdL8zk7f4YNv7jnpsnnY2yEbekX.jpg"}
    ]
    return (
        <div className='Process'>
            <div>
                {data1.map(it=>(
                    <ProcessCard num={it.num} link={it.link} heading={it.heading} info={it.info} />
                ))}
            </div>
            <div>
                {data2.map(it=>(
                    <ProcessCard num={it.num} link={it.link} heading={it.heading} info={it.info} />
                ))}
            </div>
        </div>
    )
}