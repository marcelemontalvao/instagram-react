import Story from "./Story"

export default function Stories() {
    const storyObjects = [
        {
            imageStory: "./assets/baianaSystem.jpg",
            altStory: "Baiana System",
            name: "baianasystem",
        },
        {
            imageStory: "./assets/scalene.jpg",
            altStory: "Banda Scalene",
            name: "bandascalene",
        },
        {
            imageStory: "./assets/muse.jpeg",
            altStory: "Muse",
            name: "muse",
        },
        {
            imageStory: "./assets/darkside.jpeg",
            altStory: "Darkside",
            name: "darksidebooks",
        },
        {
            imageStory: "./assets/respondeai.jpg",
            altStory: "Responde ai",
            name: "respondeai",
        },
        {
            imageStory: "./assets/driven.png",
            altStory: "Driven Education",
            name: "driven.education",
        },
        {
            imageStory: "./assets/rafaballerini.jpg",
            altStory: "Rafaela Ballerini",
            name: "rafaballerini",
        },
    ]

    return (
        <ul className="menu">
            {storyObjects.map(story => <Story storyObject={story} />)}
            <div className="arrow">
                <ion-icon name="chevron-forward-circle"></ion-icon>              
            </div>
        </ul>
    )
} 