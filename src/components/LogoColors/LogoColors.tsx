import React from "react";
import { Link } from "react-router-dom";
import "./LogoColors.scss";

export default function LogoColors() {
  return (
    <Link to="colors" className="LogoColors">
      <div></div>
      <div></div>
      <div></div>
    </Link>
  );
}
