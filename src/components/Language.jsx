
export default function Language(props){
    return (
        <div className="language">
         <img src={props.image} alt={props.name}/>
         <h2>{props.level}</h2>
        </div>
    )
}