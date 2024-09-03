import "../styles/components/Settings.scss";
import ThemeContext from "../context/theme.context";
import { useContext, useState } from "react";
import { MEASUREMENT_UNIT } from "../utils";
import WeatherContext from "../context/weather.context";
const Settings = () => {
  const {
    dark,
    setDark,
    savedThemeToLocalStorage,
  } = useContext(ThemeContext);

  const toggleTheme = () => {
    setDark((prevDark) => !prevDark); // toggle dark mode from current state to new state (from true[dark] to false[white])
    savedThemeToLocalStorage(!dark); // usestate (true) to false state use !dark
  };

  const [openSetting, setOpenSetting] = useState(false);
  const {measurementSystem,setMeasurementSystem} = useContext(WeatherContext)

  const handleOpenSettings = () => {
    setOpenSetting((prevSetting) => !prevSetting);
    console.log("test");
  };

    const handleClickSettings = (Objvalue) => {
  setMeasurementSystem(Objvalue)


    }

  return (
    <div className="Settings">
      <div className="theme-toggler">
        <div className="theme-buttons" onClick={toggleTheme}>
          <div className={`light-theme-btn ${dark ? "" : "active"}`}>
            <i className="bi bi-sun"></i>
          </div>
          <div className={`dark-theme-btn ${dark ? "active" : ""}`}>
            <i className="bi bi-moon"></i>
          </div>
        </div>
      </div>
      {/* Use this when no arguments need to be passed to the function. */}
      <div className="settings-btn" onClick={handleOpenSettings}>
        {" "}
        <i className={`bi bi-gear${openSetting ? "-fill" : ""}`}></i>
        {/* icon need to have space bi bi-gear${} */}
      </div>
      {/* however div doesn't require any space for classes */}
      <div className={`settings-menu ${openSetting ? "open" : ""}`}>
        <div className="measurement-systems">
          <h4>{"Measurement System :"}</h4>
          {/* render measurement system through api below */}
          <div className="systems">
            {
              // Object.values used for getting value in object and will return in new Array
              Object.values(MEASUREMENT_UNIT).map((Objvalue) => {
                return (
                  <div
                    className={`system ${
                      Objvalue === measurementSystem ? "active" : " "
                    }`}
                    key={Objvalue}
                    onClick={() => handleClickSettings(Objvalue)} //This syntax uses an arrow function to call handleClickSettings with Objvalue as an argument.
                  >
                    {Objvalue}
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
