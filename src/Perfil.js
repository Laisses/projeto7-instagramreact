const nome = "Catana";

const Nome = props => {
    return (
        <div>
            <p>{props.nome}</p>
            <img src="assets/images/edit.svg" alt="ícone de editar" />
        </div>
    );
};

export const Perfil = () => {
    return (
        <div className="sidebar__perfil">
            <img src="assets/images/catanacomics1.jpg" alt="Foto de perfil" className="perfil--imagem" />
            <div className="sidebar__perfil--login">
                <h3>catanacomics</h3>
                <Nome key={nome} nome={nome} />
            </div>
        </div>
    );
};