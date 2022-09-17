import React from "react";

const postsData = [
    {
        autor: {
            nome: "andrewmarkhenry",
            foto: "assets/images/andrew-post.jpg",
        },
        media: {
            tipo: "imagem",
            source: "assets/images/post-egito.jpg",
        },
        curtidas: {
            imagem: "assets/images/respondeai2.jpg",
            nome: "repondeai",
            curtidas: 101523
        },
        comentarios: {
            numero: 8,
            mensagens:
                [
                    { nome: "canahuii", texto: "This is so beautiful." },
                    { nome: "victorvondoom125", texto: "I visited the temple at Esna earlier this year, and it really is stunning when you look up and see that color." },
                ],
            dias: 1,
        },
    },
    {
        autor: {
            nome: "alura",
            foto: "assets/images/alura-post.jpg",
        },
        media: {
            tipo: "imagem",
            source: "assets/images/post-alura.jpg",
        },
        curtidas: {
            imagem: "assets/images/marianinha.jpg",
            nome: "anaclara.profa",
            curtidas: 10468
        },
        comentarios: {
            numero: 16,
            mensagens:
                [
                    { nome: "sarafacundo.tech", texto: "Que massaaaaaa" },
                    { nome: "rajayt992", texto: "Como eu faço para me inscrever?" },
                ],
            dias: 3,
        },
    },
    {
        autor: {
            nome: "barked",
            foto: "assets/images/barked1.jpg",
        },
        media: {
            tipo: "video",
            source: {
                mp4: "assets/images/video.mp4",
                ogg: "assets/images/video.ogg",
            },
        },
        curtidas: {
            imagem: "assets/images/adorableanimals2.jpg",
            nome: "adorableanimals",
            curtidas: 200898
        },
        comentarios: {
            numero: 6,
            mensagens:
                [
                    { nome: "evangelyne.p", texto: "Ohhh que j'adore c'est vraiment un animal trop trop chou on a l'impression qu'il sourit tout le temps" },
                    { nome: "j.mac41", texto: "SO CUTE" },
                ],
            dias: 1,
        },
    },
];

const Post = props => {

    const [valor, setValor] = React.useState(props.curtidasNumero);

    const like = () => {
        const valorAumentado = valor + 1;
        setValor(valorAumentado);
    };

    //trocar a cor usando useState e ver se é true ou false
    //Salvar muda a cor para preenchido de preto
    //como colocar ponto no milhaaaaaaaaaaaaares

    return (
        <li>
            <div className="posts__titulo">
                <div className="posts__titulo--id">
                    <img src={props.foto} alt={`Foto de perifl de ${props.autor}`} />
                    <h2>{props.autor}</h2>
                </div>
                <img src="assets/images/ellipsis-horizontal.svg" alt="Ícone de reticências" className="posts__titulo--icone" />
            </div>
            {props.mediaTipo === "imagem"
                ? <img src={props.mediaSrc} alt="imagem do post" className="posts__img" />
                :
                <video controls autoPlay muted>
                    <source src={props.mediaSrc.mp4} type="video/mp4" />
                    <source src={props.mediaSrc.ogg} type="video/ogg" />
                    Your browser does not support the video tag.
                </video>
            }
            <div className="posts__acoes">
                <div className="posts__acoes--positivas">
                    <img src="assets/images/heart-outline.svg" alt="Ícone de coração" onClick={like}/>
                    <img src="assets/images/chatbubble-outline.svg" alt="Ícone de balão de conversa" />
                    <img src="assets/images/paper-plane-outline.svg" alt="Ícone de um avião de papel" />
                </div>
                <img src="assets/images/bookmark-outline.svg" alt="Ícone de marcador de página" />
            </div>
            <div className="posts__reacoes">
                <img src={props.curtidasImg} alt="Foto do perfil" />
                <p>Curtido por <span>{props.curtidasNome}</span> e <span>outras {valor} pessoas</span></p>
            </div>
            <div className="posts__comentarios">
                <h3>Ver todos os {props.comentariosQtde} comentários</h3>
                {props.comentariosMensagens.map(e =>
                    <div key={e.nome}>
                        <p><span>{e.nome}</span> {e.texto}</p>
                        <img src="assets/images/heart-outline.svg" alt="ícone de coração" />
                    </div>)}
                <p className="posts__comentarios--data">
                    {props.comentariosDias === 1
                        ?
                        `Há ${props.comentariosDias} dia`
                        :
                        `Há ${props.comentariosDias} dias`
                    }
                </p>
            </div>
            <div className="posts__comentar">
                <img src="assets/images/happy-outline.svg" alt="Ícone de carinha feliz" />
                <input type="text" aria-label="Adicione um comentário..." placeholder="Adicione um Comentário..." />
                <button type="button">Publicar</button>
            </div>
        </li>
    );
};

export const Posts = () => {
    return (
        <ul className="posts">
            {postsData.map(p =>
                <Post
                    key={p.autor.nome}
                    autor={p.autor.nome}
                    foto={p.autor.foto}
                    mediaTipo={p.media.tipo}
                    mediaSrc={p.media.source}
                    curtidasImg={p.curtidas.imagem}
                    curtidasNome={p.curtidas.nome}
                    curtidasNumero={p.curtidas.curtidas}
                    comentariosQtde={p.comentarios.numero}
                    comentariosMensagens={p.comentarios.mensagens}
                    comentariosDias={p.comentarios.dias}
                />)}
        </ul>
    );
};
