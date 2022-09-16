import { NavbarDesktop, NavbarMobile } from "./Navbar";
import { MenuMobile } from "./MenuMobile";
import { Main } from "./Main";

export const App = () => {
    return (
      <div>
        <NavbarDesktop />
        <NavbarMobile />
        <Main />
        <MenuMobile />
      </div> 
    );
}