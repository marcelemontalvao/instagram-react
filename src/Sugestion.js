export default function Sugestion(props) {
    return (
        <div className="sugestion">
            <div className="sugestionicon">
                <div>
                    <img src={props.sugestionObject.sugestionImage} />
                </div>
                <div>
                    <p className="sidebarusername">{props.sugestionObject.username}</p>  
                    <p className="subtitle">{props.sugestionObject.subtitle}</p>
                </div>
            </div>

            <div className="sugestionbutton">
                <button>Seguir</button>
            </div>
        </div>

    )
}