import './Number.scss';
import { colorsOfNumbers } from '../../utils/arrayOfColors';

export default function Number({
  number,
  handleClick,
}: {
  number: number;
  handleClick?: () => void;
}) {
  return (
    <div
      className='Number circle number'
      style={{ color: colorsOfNumbers[number - 1] }}
      onClick={handleClick}>
      {number}
    </div>
  );
}
