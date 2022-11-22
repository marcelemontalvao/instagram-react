import Sugestion from "./Sugestion"

export default function Sugestions() {
    const sugestionObject = [
        {
            sugestionImage: "./assets/attekita.jpeg",
            username: "attekitadev",
            subtitle: "Sugestões para você"
        },
        {
            sugestionImage: "./assets/supercombo.jpg",
            username: "supercombooficial",
            subtitle: "Sugestões para você"
        },
        {
            sugestionImage: "./assets/luedjiluna.jpg",
            username: "luedjiluna",
            subtitle: "Sugestões para você"
        },
        {
            sugestionImage: "./assets/badvibesmemes1.png",
            username: "bad.vibes.memes",
            subtitle: "Novo no Instagram"
        },
        {
            sugestionImage:"./assets/brasilcode_.jpg",
            username: "brasilcode_",
            subtitle: "Sugestões para você"
        }
    ]
    return (
        <>
            <div className="sugestions">
               {sugestionObject.map(sugestion => <Sugestion sugestionObject={sugestion} />)}
            </div>
        </>
    )
} 