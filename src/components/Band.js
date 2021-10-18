import PropTypes from "prop-types";

const Band = ({ band }) => {
  //Prevent show component whit empty object
  if (Object.keys(band).length === 0) return null;

  //get object data
  const {
    strArtistThumb,
    strGenre,
    strBiographyES,
    strFacebook,
    strTwitter,
    strLastFMChart,
  } = band;

  return (
    <div className="card border-light">
      <div className="card-header bg-primary text-light font-weight-bold">
        Información del Artista
      </div>
      <div className="card-body">
        <img src={strArtistThumb} alt="Logo Artista" />
        <p className="card-text">Género: {strGenre}</p>
        <h2 className="card-text">Biografia</h2>
        <p className="card-text">Género: {strBiographyES}</p>
        <p className="card-text">
          <a
            href={`https://${strFacebook}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href={`https://${strTwitter}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href={`${strLastFMChart}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-lastfm"></i>
          </a>
        </p>
      </div>
    </div>
  );
};

Band.propTypes = {
  band: PropTypes.object.isRequired,
};

export default Band;
