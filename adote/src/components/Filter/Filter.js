import "./styles.css";
import Dropdown from "../Dropdown/Dropdown";
import React, { useEffect, useState } from "react";

function Filter() {
  const [state, setState] = useState([]);

  const fetchData = () => {
    return fetch(
      "https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome"
    )
      .then((response) => response.json())
      .then((data) => setState(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const brStates = state.map((stateObj) => stateObj.nome);

  return (
    <main className="card">
      <ul>
        {state &&
          state.length > 0 &&
          state.map(
            (stateObj, index) => (
              // <li key={stateObj.name}>{stateObj.nome}</li>
              brStates.push(stateObj.nome), console.log(brStates)
            )
          )}
      </ul>
      <div className="filter-container">
        <div className="filter-box">
          <Dropdown
            isSearchable={true}
            placeHolder="UF"
            options={brStates.map((label) => ({ value: label, label }))}
            
          />
          <Dropdown
            isSearchable={true}
            placeHolder="CIDADE"
            options={brStates.map((label) => ({ value: label, label }))}
            
          />
        </div>
      </div>
    </main>
  );
}

export default Filter;
