import { NavLink } from "react-router-dom";
import "./LogoColors.scss";


export default function LogoColors() {
  return (
    <NavLink to="colors" className="LogoColors">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
    </NavLink>
  );
}
