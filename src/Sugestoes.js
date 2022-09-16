const sugestoes = [
    {
        nome: "bad.vibes.memes",
        foto: "assets/images/badvibesmemes1.jpg",
        alt: "Foto do perfil bad vibes",
        status: "Segue você",
    },
    {
        nome: "chibirdart",
        foto: "assets/images/chibirdart1.jpg",
        alt: "Foto do perfil chibird",
        status: "Segue você",
    },
    {
        nome: "razoesparaacreditar",
        foto: "assets/images/razoesparaacreditar1.jpg",
        alt: "Foto do perfil razões para acreditar",
        status: "Novo no Instagram",
    },
    {
        nome: "adorable_animals",
        foto: "assets/images/adorableanimals1.jpg",
        alt: "Foto do perfil adorable animals",
        status: "Segue você",
    },
    {
        nome: "smallcutecats",
        foto: "assets/images/smallcutecats1.jpg",
        alt: "Foto do perfil small cute cats",
        status: "Segue você",
    },
];

const Perfil = props => {
    return (
        <li>
            <img src={props.foto} alt={props.alt} />
            <div>
                <h3>{props.nome}</h3>
                <p>{props.status}</p>
            </div>
            <p>Seguir</p>
        </li>
    );
};

export const Sugestoes = () => {
    return (
        <div className="sidebar__sugestoes">
            <div className="sidebar__sugestoes--titulo">
                <h2>Sugestões para você</h2>
                <p>Ver tudo</p>
            </div>
            <ul className="sidebar__sugestoes--perfis">
                {sugestoes.map(e => <Perfil key={e.nome} nome={e.nome} foto={e.foto} alt={e.alt} status={e.status} />)}
            </ul>
        </div>
    );
};