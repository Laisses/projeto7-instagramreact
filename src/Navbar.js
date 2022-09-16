
export const NavbarDesktop = () => {
    return (
        <nav className="nav__desktop">
            <ul className="nav__container">
                <li className="nav__logo">
                    <img src="assets/images/icone-instagram.svg" alt="Ícone do instagram" className="nav__logo--icone" />
                    <div className="nav__logo--borda"></div>
                    <img src="assets/images/logo.jpg" alt="Logo do Instagram" />
                </li>
                <li>
                    <input type="text" placeholder="Pesquisar" aria-label="pesquisar" />
                </li>
                <li className="nav__icones">
                    <img src="assets/images/paper-plane-outline.svg" alt="Ícone de um avião de papel" />
                    <img src="assets/images/compass-outline.svg" alt="Ícone de uma bússola" />
                    <img src="assets/images/heart-outline.svg" alt="Ícone de um coração" />
                    <img src="assets/images/person-outline.svg" alt="Ícone da silhueta de uma pessoa" />
                </li>
            </ul>
        </nav>
    );
};

export const NavbarMobile = () => {
    return (
        <nav className="nav__mobile">
            <img src="assets/images/icone-instagram.svg" alt="Ícone do instagram" className="nav__mobile--icone" />
            <img src="assets/images/logo.jpg" alt="Logo do Instagram" className="nav__mobile--logo" />
            <img src="assets/images/paper-plane-outline.svg" alt="Ícone de um avião de papel" className="nav__mobile--icone" />
        </nav>
    );
};