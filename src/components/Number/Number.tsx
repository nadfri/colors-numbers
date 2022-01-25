import "./Number.scss";
import { colorsOfNumbers } from "../../utils/arrayOfColors";

export default function Number({
  number,
  handleClick,
}: {
  number: number;
  handleClick?: any;
}) {
  const style = handleClick
    ? { color: colorsOfNumbers[number - 1] }
    : {
        color: colorsOfNumbers[number - 1],
        fontSize: "clamp(35vw,50vw,400px)",
      };

  return (
    <div
      className="Number"
      style={style}
      onMouseUp={handleClick}
      onTouchEnd={handleClick}
    >
      {number}
    </div>
  );
}
