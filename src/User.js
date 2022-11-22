export default function User(props) {
    return (
        <div data-test="user">
            <div className="perfil">
                <img src={props.userImage} onClick={props.changeUserImage} data-test="profile-image" />
               
                <div>
                    <p className="sidebarusername">marcelemontalvao_</p>
                    <div className="flex">
                        <p className="subtitle" data-test="name">{props.username}</p>
                        <ion-icon name="pencil-outline" onClick={props.changeUsername} data-test="edit-name"></ion-icon>
                    </div>
                </div>
            </div>
            
            <div className="menu-sugestion">
                <p>Sugestões para você</p>
                <p>Ver tudo</p>
            </div>
        </div>
    )
}
