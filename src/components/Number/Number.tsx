import "./Number.scss";
import { colorsOfNumbers } from "../../utils/arrayOfColors";

export default function Number({
  number,
  handleClick,
}: {
  number: number;
  handleClick?: any;
}) {


  return (
    <div
      className="Number circle number"
      style={{ color: colorsOfNumbers[number - 1] }}
      onMouseUp={handleClick}
      onTouchStart={handleClick}
      onTouchEnd={(e) => e.preventDefault()}
    >
      {number}
    </div>
  );
}
