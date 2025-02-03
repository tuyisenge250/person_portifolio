// name={lev.name} 
// location={lev.location}
// level={lev.level}
// courses={lev.courses}
// description={lev.description}

export default function Education(props){
    return (
        <div className="education-content">
            <h1>{props.name}</h1>
            <p><span className="country">{props.location}</span></p>
            <h2>Level: <span className="ed-courses">{props.level}</span></h2>
            <h2>Course: <span className="ed-courses">{props.courses}</span></h2>
            <p>
                {props.description}
            </p>
        </div>
    )
}