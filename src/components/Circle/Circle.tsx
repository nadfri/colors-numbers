export default function Circle({
  backgroundColor,
  handleClick,
}: {
  backgroundColor: string;
  handleClick?: () => void;
}) {
  return <div style={{ backgroundColor }} className='circle' onClick={handleClick}></div>;
}
