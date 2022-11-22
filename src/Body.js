import Left from "./Left"
import Sidebar from "./Sidebar"
import BottomMobile from "./BottomMobile"

export default function Body() {
    return (
        <main className="container">
            <Left />
            <Sidebar />
            <BottomMobile />
        </main>
    )
}