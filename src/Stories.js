const storiesData = [
    { src: "assets/images/andrew-stories.jpg", alt: "Foto do perfil do Andrew Henry", titulo: "andrewmarkhenry" },
    { src: "assets/images/alura-stories.jpg", alt: "Foto do perfil da Alura", titulo: "alura" },
    { src: "assets/images/meowed1.jpg", alt: "Foto do perfil do meowed", titulo: "meowed" },
    { src: "assets/images/barked1.jpg", alt: "Foto do perfil do barked", titulo: "barked" },
    { src: "assets/images/9gag1.jpg", alt: "Foto do perfil do 9gag", titulo: "9gag" },
    { src: "assets/images/respondeai1.jpg", alt: "Foto do perfil do Responde Aí", titulo: "respondeai" },
    { src: "assets/images/becohexagonal.png", alt: "Foto do perfil do Beco Hexagonal", titulo: "becohexagonal" },
    { src: "assets/images/filomoderna1.jpg", alt: "Foto do perfil do Filosofia Moderna", titulo: "filomoderna" },
];

const Story = props => {
    return (
        <li>
            <div>
                <img src={props.src} alt={props.alt} />
            </div>
            <h2>{props.titulo}</h2>
        </li>
    );
};

export const Stories = () => {
    return (
        <ul className="stories">
            {storiesData.map(s => <Story key={s.src} src={s.src} alt={s.alt} titulo={s.titulo} />)}
            <img src="assets/images/seta-stories.svg" alt="ícone de uma seta" className="stories__seta" />
        </ul>
    );
};