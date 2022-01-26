import { NavLink } from "react-router-dom";
import Number from "../Number/Number";

export default function Logo123() {
  return (
    <NavLink to="numbers" className="logoLink">
      <Number number={1} />
      <Number number={2} />
      <Number number={3} />
    </NavLink>
  );
}
