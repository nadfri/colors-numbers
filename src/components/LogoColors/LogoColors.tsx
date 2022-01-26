import { NavLink } from "react-router-dom";
import Circle from '../Circle/Circle';

export default function LogoColors() {
  return (
    <NavLink to="colors" className="logoLink">
      <Circle backgroundColor="red" />
      <Circle backgroundColor="yellow" />
      <Circle backgroundColor="lime" />
    </NavLink>
  );
}
