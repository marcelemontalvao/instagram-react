import User from "./User"
import Sugestions from "./Sugestions"
import {useState} from "react"

export default function Sidebar() {
    const [username, setUsername] = useState("Marcele Montalvão");
    const [userImage, setUserImage] = useState("./assets/marcelemontalvao.jpeg");
    function setUser() {
      const name = prompt("Qual o seu novo nome de usuário?");
      if(name === null) {
      } else if (name !== "") {
        setUsername(name);
      } 
    } 
    function checkUrl(string) {
      try {
        let url = new URL(string);
        return true;
      } catch (err) {
        return false;
      }
    }
    function setImgUser() {
      const img = prompt("Qual a sua nova imagem? Insira um link.");
      if(img === null) {
      } else if (img !== "") {
        if(checkUrl(img)) {
          setUserImage(img);
        }
      } 
    }
    return (
        <aside>
            <div className="sidebar">
              <User username={username} userImage={userImage} changeUsername={setUser} changeUserImage={setImgUser} />
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