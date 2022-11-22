export default function User(props) {
    return (
        <>
            <div className="perfil">
                <img src={props.userImage} onClick={props.changeUserImage} />
               
                <div>
                    <p className="sidebarusername">marcelemontalvao_</p>
                    <div className="flex">
                        <p className="subtitle">{props.username}</p>
                        <ion-icon name="pencil-outline" onClick={props.changeUsername}></ion-icon>
                    </div>
                </div>
            </div>
            
            <div className="menu-sugestion">
                <p>Sugestões para você</p>
                <p>Ver tudo</p>
            </div>
        </>
    )
}
