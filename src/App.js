import { NavbarDesktop, NavbarMobile } from "./Navbar";
import { MenuMobile } from "./MenuMobile";

export const App = () => {

    return (
      <body>
        <NavbarDesktop />
        <NavbarMobile />
        <MenuMobile />
      </body> 
    );
    //Navbar-desktop
       
    //Navbar-mobile
        
    //main
        //feed
            //stories
            //posts
        //sidebar
            //perfil
            //sugestoes
            //footer
    //menu-mobile

}

/*
const Imagem = props => {
  return (
    <img src={props.url}/>
  );
}

function App() {
  return (
    <div class="imagens">
      {urls.map((u) => (<Imagem url={u} />))}
    </div>
  );
}
*/

