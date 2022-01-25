import React from "react";
import { Link } from "react-router-dom";
import "./Logo123.scss";


export default function Logo123() {
  return (
    <Link to="numbers" className="Logo123">
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </Link>
  );
}
