export default function Story(props) {
   return (
    <li>
        <div className="photo">
            <img src={props.storyObject.imageStory} alt={props.storyObject.altStory} />
        </div>
        <span>{props.storyObject.name}</span>
    </li>
   )
}