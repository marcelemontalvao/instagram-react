import { useState } from "react"

export default function Post(props) {
    const [likeName, setLikeName] = useState("heart-outline")
    const [savePost, setSavePost] = useState("bookmark-outline")
    const [countLikes, setCountLikes] = useState(props.postObject.count)
    let countTime = 0;
    return (
        <li className="post" data-test="post">
            <div className="top-post">
                <div className="perfil">
                    <img src={props.postObject.perfilImage} />
                    <span>{props.postObject.name}</span>
                </div>
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
            
            <img src={props.postObject.image} data-test="post-image" onClick={()=> {
                countTime++;
                if(countTime == 2) {
                    setLikeName("heart"); 
                    if(props.postObject.count == countLikes) {
                        setCountLikes(countLikes+1);
                    }
                }
                setTimeout(()=> {
                    countTime = 0;
                }, 500)
            }}/>

            <div className="icons-post">
                <div>
                    <ion-icon name={likeName} data-test="like-post" onClick={()=> {
                        if(likeName == "heart-outline") {
                            setLikeName("heart"); 
                            setCountLikes(countLikes+1);
                        }
                        else {
                            setLikeName("heart-outline");
                            setCountLikes(countLikes-1);
                        }
                    }}></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                    <ion-icon name={savePost} data-test="save-post" onClick={()=> {
                        if(savePost == "bookmark-outline") {
                            setSavePost("bookmark"); 
                        }
                        else {
                            setSavePost("bookmark-outline");
                        }
                    }}></ion-icon>
                </div>
            </div>

            <div className="postbottom">
                <div>
                    <img src={props.postObject.likePerfilImage}/>   
                </div>
                <div className="info">
                    <p className="infopost">
                    Curtido por <span>{props.postObject.likePerfilName}</span> e <span>
                    {countLikes} outras pessoas</span> 
                    </p>
                </div>
            </div>

            <div className="description">
                <span><img src={props.postObject.perfilImage} alt="Baiana System"/><span className="ig">{props.postObject.name}</span><span className="text-description">{props.postObject.textDescription}</span></span> 
            </div>

            <div className="number-all-posts">
                <span>Ver todos os <span data-test="likes-number">{props.postObject.number}</span> comentários</span>
            </div>

            
            <div className="comments-post">
                <div className="right-side">
                    <img src={props.postObject.commentPerfilImage} alt="Vandal"/>
                    <span><span className="ig">{props.postObject.commentPerfilName}</span><span className="text-description">{props.postObject.commentPerfilText}</span></span>   
                </div>
                <ion-icon name="heart-outline"></ion-icon>
            </div>

            <div className="comments">
                <ion-icon name="happy-outline"></ion-icon>
                <input type="text" placeholder="Adicione um comentário..." />
                <button required>Publicar</button>
            </div>
        </li>
    )
} 