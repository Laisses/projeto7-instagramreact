import React from "react";

export const Perfil = () => {
    const [nome, setNome] = React.useState("Catana");
    const [foto, setFoto] = React.useState("assets/images/catanacomics1.jpg");

    const inserirNome = () => {
        const nomePerfil = prompt("Qual o seu nome?");
        
        if (nomePerfil === null) {
            setNome(nome);
        } else if (nomePerfil === "") {
            alert("Você precisa escrever um nome!")
            inserirNome();
        } else {
            setNome(nomePerfil);
        }      
    };

    const inserirFoto = () => {
        const fotoPerfil = prompt("Cole o endereço da sua imagem");
        const regex = /(data:image\/|(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?)/;

        if (fotoPerfil === null) {
            setFoto(foto);
        } else if (fotoPerfil === "") {
            alert("Você deve colocar uma nova imagem");
            inserirFoto();   
        } else if (!regex.test(fotoPerfil)) {
            alert("A imagem deve ser uma URL");
            inserirFoto();
        } else {
            setFoto(fotoPerfil);
        }
    };

    return (
        <div className="sidebar__perfil">
            <img src={foto} alt="Foto de perfil" className="perfil--imagem" onClick={inserirFoto} />
            <div className="sidebar__perfil--login">
                <h3>catanacomics</h3>
                <div>
                    <p>{nome}</p>
                    <img src="assets/images/edit.svg" alt="ícone de editar" onClick={inserirNome} />
                </div>
            </div>
        </div>
    );
};