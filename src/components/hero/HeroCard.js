import React from "react";
import { Link } from "react-router-dom";
import "./Herocard.css";

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const imagePath = `/assets/${id}.jpg`;

  return (
    <div className="col">
      <div className="card">
        <img src={imagePath} alt={superhero} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{superhero}</h5>
          <p className="card-text">{alter_ego}</p>
          {alter_ego !== characters && (
            <p className="text-muted">{characters}</p>
          )}

          <p className="card-text">
            <small className="text-muted">{first_appearance}</small>
          </p>

          <Link to={`/hero/${id}`} className="btn btn-outline-primary">
            Ver mas...
          </Link>
        </div>
      </div>
    </div>
  );
};
