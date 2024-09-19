const User = ({name, location}) => {
    return (
        <div className="user-card">
            <h3>{name}</h3>
            <h4>Location : {location}</h4>
            <h4>Contact : @aishwaryaa_potdar</h4>
        </div>
    )
}

export default User;