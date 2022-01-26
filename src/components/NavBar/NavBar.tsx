import "./NavBar.scss";
import LogoColors from "../LogoColors/LogoColors";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="NavBar">
      <div className="links">
        <LogoColors />
        <NavLink to="numbers" className="container-numbers">
          <div className="number">1</div>
          <div className="number">2</div>
          <div className="number">3</div>
        </NavLink>
      </div>
      <div className="flags"></div>
    </div>
  );
}
