import { useState } from "react";
import Error from "./Error";
import PropTypes from "prop-types";

const Form = ({ setSearchLyric }) => {
  //States
  const [search, setSearch] = useState({
    artist: "",
    song: "",
  });
  const [error, setError] = useState(false);
  const { artist, song } = search;

  //Function that save the content for each input
  const updateState = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  //validate & save the terms for the search
  const searchSong = (e) => {
    e.preventDefault();
    if (artist.trim() === "" || song.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    setSearchLyric(search);
  };

  return (
    <div className="bg-info">
      <div className="container">
        <div className="row">
          <form
            className="col card text-white bg-transparent mb-5 pt-5 pb-2"
            onSubmit={searchSong}
          >
            <fieldset>
              <legend className="text-center">Buscador Letras Canciones</legend>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Artista</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nombre del Artista"
                      name="artist"
                      onChange={updateState}
                      value={artist}
                    ></input>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Canción</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nombre de la Canción"
                      name="song"
                      onChange={updateState}
                      value={song}
                    ></input>
                  </div>
                </div>
              </div>

              <button type="submit" className="btn btn-primary float-right">
                Buscar
              </button>
            </fieldset>
          </form>
        </div>
        {error ? <Error message="Todos los Campos son Obligatorios" /> : null}
      </div>
    </div>
  );
};

Form.propTypes = {
  setSearchLyric: PropTypes.func.isRequired,
};

export default Form;
