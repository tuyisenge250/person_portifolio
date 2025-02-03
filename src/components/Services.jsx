
export default function Service(props){
    return (
        <div className="service-item">
          <div className="icon">{props.link ?<a href={props.link} target="_blank">{props.Icon}</a> :props.Icon}</div>
          <h2>{props.title}</h2>
          <p>
            {props.describe}
          </p>
        </div>
    )
}