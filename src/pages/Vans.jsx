import React from "react";
import { Link, useSearchParams } from "react-router-dom";

const vans = [
  { id: "1", name: "Van A", type: "luxury" },
  { id: "2", name: "Van B", type: "simple" },
  { id: "3", name: "Van C", type: "rugged" },
];

export default function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

  const displayedVans = typeFilter
    ? vans.filter(van => van.type === typeFilter)
    : vans;

  return (
    <div className="vans-page">
      <h1>Explore Our Vans</h1>
      <div className="filter-options">
        <button onClick={() => setSearchParams({ type: "luxury" })}>Luxury</button>
        <button onClick={() => setSearchParams({ type: "simple" })}>Simple</button>
        <button onClick={() => setSearchParams({ type: "rugged" })}>Rugged</button>
        <button onClick={() => setSearchParams({})}>Clear</button>
      </div>
      <ul>
      {displayedVans.map(van => (
          <li key={van.id}>
            <Link to={`/vans/${van.id}`}>{van.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}