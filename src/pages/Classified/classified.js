import React from "react";
import { Link } from "react-router-dom";
import ClassifiedList from "../../components/ClassifiedList/classifiedList";

export default function Classified() {
  return (
    <>
      <h3>Classified</h3>
      <Link to="/">Home</Link>
      <ClassifiedList />
    </>
  );
}
