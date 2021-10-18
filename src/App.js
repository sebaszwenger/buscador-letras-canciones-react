import { useState, useEffect } from "react";
import Form from "./components/Form";
import axios from "axios";
import Song from "./components/Song";
import Band from "./components/Band";

function App() {
  //Satates
  const [searchLyric, setSearchLyric] = useState({});
  const [lyric, setLyric] = useState("");
  const [band, setBand] = useState({});

  //Call APIs
  useEffect(() => {
    //avoid first call with empty search term
    if (Object.keys(searchLyric).length === 0) return;

    const queryAPIs = async () => {
      const { artist, song } = searchLyric;
      const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;

      const [lyrics, bands] = await Promise.all([axios(url), axios(url2)]);

      const lyricSong = lyrics.data.lyrics.substring(
        22 + song.length + 5 + artist.length + 2
      );
      setLyric(lyricSong);
      setBand(bands.data.artists[0]);
    };
    queryAPIs();
  }, [searchLyric, band]);

  return (
    <>
      <Form setSearchLyric={setSearchLyric} />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Band band={band} />
          </div>
          <div className="col-md-6">
            <Song lyric={lyric} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
