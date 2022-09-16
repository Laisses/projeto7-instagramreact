const lista = [
    "Sobre", "Ajuda", "Imprensa", "API", "Carreiras", "Privacidade", "Termos", "Localizações", "Contas mais relevantes", "Hashtags", "Idioma"
];

export const Footer = () => {
    return (
        <div className="sidebar__footer">
            <ul>
                {lista.map(e => <li>{e}</li>)}
            </ul>
            <p>&copy; instagram do facebook</p>
        </div>
    );
}