

const Card = ({height,className,name}) => {
    return (<div className="card" style={{height:`${height}px`}}>
        <div className={`${className} hero_name`}>
        <p>name:</p>
        <p>{name}</p>
        </div>
    </div>)
}

export default Card