const Band = ({ band }) => {
  if (Object.keys(band).length === 0) return null;

  return (
    <div className="card border-light">
      <div className="card-header bg-primary text-light font-weight-bold">
        Información del Artista
      </div>
      <div className="card-body">
        <img src={band.strArtistThumb} alt="Logo Artista" />
      </div>
    </div>
  );
};

export default Band;
