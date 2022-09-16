import { Perfil } from "./Perfil";
import { Sugestoes } from "./Sugestoes";
import { Footer } from "./Footer";

export const Sidebar = () => {
    return (
        <div className="sidebar">
            <Perfil />
            <Sugestoes />
            <Footer />
        </div>
    );
};