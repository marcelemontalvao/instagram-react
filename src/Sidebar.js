import User from "./User"
import Sugestions from "./Sugestions"
import {useState} from "react"

export default function Sidebar() {
    const [username, setUsername] = useState("Marcele Montalvão");
    const [userImage, setUserImage] = useState("./assets/marcelemontalvao.jpeg");
    return (
        <aside>
            <div className="sidebar">
              <User username={username} userImage={userImage} changeUsername={()=> {
                setUsername(prompt("Qual o seu novo nome de usuário?"))
              }} changeUserImage={()=> {
                setUserImage(prompt("Qual a sua nova imagem? Insira um link."))
              }} />
              <Sugestions />
              <div className="infosidebar">
                  <p className="subsidebar">
                    Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                    Termos • Localizações • Contas mais relevantes • Hashtags •
                    Idioma
                  </p>
    
                  <p>© 2021 INSTAGRAM DO FACEBOOK</p>
              </div>
            </div>
        </aside>
    )
} 