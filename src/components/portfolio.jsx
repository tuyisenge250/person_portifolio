export default function Portifolio(props){
    return (
        <div className="service-item">
            <a href={props.link} target="_blank">{props.image? <img src={props.image}/>: props.Icon}</a>
            <h2>{props.title}</h2>
            <p>{props.describe}</p>
        </div>
    )
}