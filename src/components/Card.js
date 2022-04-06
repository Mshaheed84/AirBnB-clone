import imageCarda from "../images/image.png"
import imageCardb from "../images/mountain-bike.png"
import imageCardc from "../images/wedding-photography.png"
import star from "../images/Star.png"
export default function Card(props){
    return (
        <div className="card">
            <img src={props.img} className="card--img"/>
            <div className="card--stats">
                <img src={star} className="card--star"/>
                <span>{props.ratings}</span>
                <span className="gray">{props.reviewCount} •</span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}