import React, { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getHeroById } from "../../selectors/getHeroById";

export const HeroScreen = () => {
  const navigate = useNavigate();
  const { heroId } = useParams();

  const hero = useMemo(() => getHeroById(heroId), [heroId]);

  const handlerReturn = () => {
    navigate(-1);
  };

  if (!hero) {
    return <Navigate to="/" />;
  }

  const imagePath = `/assets/${hero.id}.jpg`;

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img src={imagePath} alt={hero.superhero} className="img-thumbnail animate__animated animate__slideInLeft" />
      </div>

      <div className="col-8 animate__animated animate__slideInRight">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego:</b>
            {hero.alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publusher:</b>
            {hero.publisher}
          </li>
          <li className="list-group-item">
            <b>First Appearance:</b>
            {hero.first_appearance}
          </li>
        </ul>

        <h5>Chracter</h5>
        <p>{hero.characters}</p>

        <button className="btn btn-outline-info" onClick={handlerReturn}>
          Regresar
        </button>
      </div>
    </div>
  );
};
