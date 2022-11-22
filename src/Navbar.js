export default function Navbar() {
    return (
        <header>
            <div className="container">
                <div className="logo">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <div className="vertical-border"></div>
                    <img src="./assets/logo.png" alt="Logo Instagram" />
                </div>
                <input type="search" placeholder="Pesquisar" />
                <div className="icons">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="compass-outline"></ion-icon>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="person-outline"></ion-icon>
                </div>
            </div>
        </header>
    )
} 