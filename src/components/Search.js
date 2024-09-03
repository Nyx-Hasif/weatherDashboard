import "../styles/components/Search.scss";
import { SearchPlaces } from "../api";
import { useState, useContext } from "react";
import WeatherContext from "../context/weather.context";
const Search = () => {
  const [text, setText] = useState("");
  const [searchResults, setSearchResults] = useState([]); //must in array
  const { setPlace } = useContext(WeatherContext);

  //making the result display search dissapear after click place
  const [openSearchResults, setOpenSearchResults] = useState(false); // default false

  const onSearch = async (e) => {
    setText(e.target.value);
    const data = await SearchPlaces(e.target.value); // fetch from api,this want to use data search from api+
    setSearchResults(data); //store in array state
    setOpenSearchResults(data.length);
  };

  const changePlace = (place) => {
    setPlace(place);
    setText("");
    setOpenSearchResults(false);
  };

  return (
    <div className="search-container">
      <div className="search-icon">
        <i className="bi bi-search"></i>
      </div>
      <div className="search-input">
        <input
          type="text"
          name="search-city"
          placeholder="Search City..."
          value={text}
          onChange={onSearch}
        />
        {openSearchResults && (
          <div className="search-results">
            <div className="results-container">
              {searchResults.map((place) => {
                return (
                  <div
                    className="result"
                    key={place.place_id}
                    onClick={() => changePlace(place)}
                  >
                    {place.name},{place.adm_area1},{place.country}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
