import React from "react";
import { useParams } from "react-router-dom";

const vans = [
  { id: "1", name: "Van A", type: "luxury", description: "A luxury van for your road trips." },
  { id: "2", name: "Van B", type: "simple", description: "A simple van for budget travelers." },
  { id: "3", name: "Van C", type: "rugged", description: "A rugged van for adventure seekers." },
];

export default function VanDetails() {
  const { id } = useParams();
  const van = vans.find(v => v.id === id);

  if (!van) {
    return <p>Van not found!</p>;
  }

  return (
    <div className="van-details">
      <h1>{van.name}</h1>
      <p>Type: {van.type}</p>
      <p>{van.description}</p>
    </div>
  );
}