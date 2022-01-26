import { NavLink } from "react-router-dom";
import "./Logo123.scss";


export default function Logo123() {
  return (
    <NavLink to="numbers" className="Logo123">
      <div className="circle number">1</div>
      <div className="circle number">2</div>
      <div className="circle number">3</div>
    </NavLink>
  );
}
