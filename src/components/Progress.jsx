export default function Progress(props){
    return(
        <div className="bar-level">
            <div className="progress" style={{width: props.width}}>
                <h3>{props.name}</h3>
                <p>{props.width}</p>
            </div>
        </div>
    )
}