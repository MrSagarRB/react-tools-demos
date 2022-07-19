import "./App.css";
import csc from "country-state-city";
import { useEffect, useState } from "react";
import Select from "react-select";

function ReactSelectDemo() {
  let [countryId, setCountryId] = useState("1");
  let [stateId, setStateId] = useState();
  let countries = csc.getAllCountries().map((country) => {
    return { label: country?.name, value: country?.name, id: country.id };
  });

  let state = csc.getStatesOfCountry(countryId).map((state) => {
    return { label: state?.name, value: state?.name, id: state.id };
  });

  let city = csc.getCitiesOfState(stateId).map((city) => {
    return { label: city?.name, name: city?.name, id: city?.id };
  });

  let handleSelectContry = (e) => {
    setCountryId(e.id);
  };

  let handleSelectState = (e) => {
    setStateId(e.id);
    console.log(city);
  };

  let handleSelectCity = (e) => {};

  // reactSelect

  const selectStyle = {
    menu: (provided, state) => ({
      ...provided,
      width: "100%",
      borderBottom: "1px dotted pink",
      color: state.selectProps.menuColor,
      padding: 20,
    }),
    control: (styles) => ({
      ...styles,
      width: "100%",
      height: "30px",
      border: "none",
      borderRadius: "20px",
      background: "#eeeeeebf",
    }),
    input: (styles) => ({
      ...styles,
      height: "30px",
      width: "100%",
      textAlign: "center",
    }),
  };

  useEffect(() => {}, [countryId]);

  return (
    <div className="App">
      {/* <Modal1 />
      <Modal2 /> */}

      <div className="table-container">
        <table>
          <tr>
            <td>Select Country</td>
            <td>
              {/* <select onChange={handleSelectCountry}>
                {countries.map((i) => {
                  return <option value={i.id}> {i.name}</option>;
                })}
              </select> */}

              <Select
                styles={selectStyle}
                options={countries}
                onChange={(e) => {
                  handleSelectContry(e);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>Select State</td>
            <td>
              <Select
                styles={selectStyle}
                options={state}
                onChange={(e) => {
                  handleSelectState(e);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>Select City</td>
            <td>
              <Select
                styles={selectStyle}
                options={city}
                onChange={(e) => {
                  handleSelectState(e);
                }}
              />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default ReactSelectDemo;
