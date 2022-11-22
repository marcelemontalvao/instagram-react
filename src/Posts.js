import Post from "./Post"

export default function Posts() {
    const postObjects = [
        {
            perfilImage: "./assets/baianaSystem.jpg",
            name: "baianasystem",
            image: "./assets/baianasystem-carnaval.jpeg",
            likePerfilImage: "./assets/rafaballerini.jpg",
            likePerfilName: "rafaballerini",
            textDescription: "🔥 CHEGOU A HORA!!! Depois de anos de espera, lançamos o tão aguardado Dicionário do Programador de C++.",
            number: "13454",
            count: 3460,
            commentPerfilImage: "./assets/vandal.jpg",
            commentPerfilText: "Saudades desse carnaval",
            commentPerfilName: "vandaldeverdade"
        },
        {
            perfilImage: "./assets/driven.png",
            name: "driven.education",
            image: "./assets/driven-img.jpg",
            likePerfilImage: "./assets/respondeai.jpg",
            likePerfilName: "respondeai",
            textDescription: "Ainda com dúvidas de como é possível ingressar no universo de tecnologia mesmo sem ainda não o saber programar? Confere o que uma das Alunas da Driven diz sobre a formação 😉",
            number: "1345",
            count: 5529,
            commentPerfilImage: "./assets/marcelemontalvao.jpeg",
            commentPerfilText: "Bootcamp maravilhoso!",
            commentPerfilName: "marcelemontalvao_",
        }
    ]
    return (
       <ul className="posts">
        {postObjects.map(post => <Post postObject={post} />)}
       </ul>
    )
} 