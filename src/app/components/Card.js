

const Card = ({height,textColor,name}) => {
    return (<div style={{
        width: "350px",
        backgroundColor: "red",
        height,
        color:textColor
    }}>
        <div>
        <p>name:</p>
        <p>{name}</p>
        </div>
    </div>)
}

export default Card