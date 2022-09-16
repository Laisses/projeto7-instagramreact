import { Stories } from "./Stories";

/*const Posts = () => {
    return ();
};*/

const Feed = () => {
    return (
        <div className="feed">
            <Stories />
        </div>
        
    );
};







export const Main = () => {
    return (
        <main>
            <Feed />
        </main>
    );
};

 //main
    //feed
        //stories
        //posts
    //sidebar
        //perfil
        //sugestoes
        //footer


    
/*
const Imagem = props => {
  return (
    <img src={props.url}/>
  );
}

function App() {
  return (
    <div className="imagens">
      {urls.map((u) => (<Imagem url={u} />))}
    </div>
  );
}
*/