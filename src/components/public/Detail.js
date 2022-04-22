import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import RickAndMortyService from "../../services/RickAndMorty.service";

export const Detail = () => {
  const [personaje, setPersonaje] = useState({});
  const { id } = useParams();
  const { pathname } = useLocation();

  useEffect(() => {
    console.log(pathname);

    RickAndMortyService.getCharacterById(id).then((data) => setPersonaje(data));
  }, []);

  return (
    <div>
      <div className="row m-3">
        <div className="col-md-12">
          <div className="card flex-md-row mb-4 box-shadow h-md-250">
            <div className="card-body d-flex flex-column aling-items-start">
              <strong className="d-inline-block mb-2 text-success">
                {personaje.species}
              </strong>
              <h3 className="mb-0 text-dark"> {personaje.name} </h3>
              <div className="mb-1 text-muted">
                {new Date(personaje.created).toLocaleDateString()}
              </div>
              <div className="mb-1 text-muted"></div>
              <p className="card-text mb-auto">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <ul className="list-group mt-1">
                <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
              </ul>

              <Link to={"/"} className="mt-3 btn btn-primary btn-lg">
                Volver
              </Link>
            </div>
            <img
              className="h-100 d-inline-block rounder card-img-right flex-auto d-none d-md-block m-4"
              height="auto"
              src={personaje.image}
              alt=""
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};
