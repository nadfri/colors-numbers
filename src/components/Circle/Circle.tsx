import "./Circle.scss";

export default function Circle({
  backgroundColor,
  handleClick,
}: {
  backgroundColor: string;
  handleClick?: any;
}) {
  //Change style to match backgroundColor
  let style: object;
  backgroundColor === "black"
    ? (style = {
        backgroundColor: backgroundColor,
        border: " solid white 4px",
      })
    : (style = {
        backgroundColor: backgroundColor,
        border: " solid black 4px",
      });

  return (
    <div
      style={style}
      className="Circle"
      onMouseUp={handleClick}
      onTouchStart={handleClick}
      onTouchEnd={(e) => e.preventDefault()}
    ></div>
  );
}
