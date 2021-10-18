import PropTypes from "prop-types";

const Song = ({ lyric }) => {
  ////Prevent show component whit empty string
  if (lyric.length === 0) return null;
  return (
    <>
      <h2>Letra Canción</h2>
      <p className="letra">{lyric}</p>
    </>
  );
};

Song.propTypes = {
  lyric: PropTypes.string.isRequired,
};

export default Song;
