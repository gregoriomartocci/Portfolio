import React from "react";
import Card from "../Card/Card";

export default function Cards({ data }) {
  return (
    <div className="cards">
      {data &&
        data.map((project, key) => <Card key={key} data={project}></Card>)}
    </div>
  );
}
