import "./Circle.scss";

export default function Circle({ backgroundColor, handleClick }: { backgroundColor: string; handleClick?: any;}) 
{
  return (
    <div
      style={{ backgroundColor }}
      className="Circle"
      onMouseUp={handleClick}
      onTouchStart={handleClick}
      onTouchEnd={(e) => e.preventDefault()}
    ></div>
  );
}
