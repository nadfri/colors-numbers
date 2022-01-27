import "./NavBar.scss";
import LogoColors from "../LogoColors/LogoColors";
import { NavLink } from "react-router-dom";
import Flags from "../Flags/Flags";
import Exitsvg from "../Exitsvg/Exitsvg";

export default function NavBar() {
  return (
    <div className="NavBar">
      <div className="links">
        <Exitsvg/>
        <LogoColors />
        <NavLink to="numbers" className="container-numbers">
          <div className="number">1</div>
          <div className="number">2</div>
          <div className="number">3</div>
        </NavLink>
      </div>
      <Flags />
    </div>
  );
}
