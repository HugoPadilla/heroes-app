import { React, useMemo } from "react";
import queryString from "query-string";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { getHeroesByName } from "../../selectors/getHeroesByName";
import { HeroCard } from "../hero/HeroCard";

export const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q: query = "" } = queryString.parse(location.search); 

  const [formValue, handlerInputChange] = useForm({ searchText: query });

  const { searchText } = formValue;
  const heroesFilter = useMemo(() => getHeroesByName(query), [query]);

  const handlerSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>Busquedas</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Buscar</h4>
          <hr />
          <form onSubmit={handlerSearch}>
            <input
              type="text"
              placeholder="Buscar un heroe"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={handlerInputChange}
            />

            <button className="btn btn-outline-primary mt-1" type="submit">
              Buscar...
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Resultado</h4>
          <hr />

          {query === "" ? ( // si no hay texto en el input no se muestra nada en la lista
            <div className="alert alert-info">Busca un heroes</div>
          ) : (
            heroesFilter.length === 0 && ( // si no hay heroes con ese nombre se muestra un mensaje de lo o
              <div className="alert alert-danger">
                No hay resultados para: {query}
              </div>
            )
          )}
          {heroesFilter.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
