import "./Menu.scss";
import Logo123 from "../../components/Logo123/Logo123";
import LogoColors from "../../components/LogoColors/LogoColors";

export default function Menu() {
  return (
    <div className="Menu">

      <div className="logoLink">
        <LogoColors />
      </div>

      <div className="logoLink">
        <Logo123 />
      </div>

    </div>
  );
}
