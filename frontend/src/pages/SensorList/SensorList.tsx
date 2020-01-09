import React, { useState, useEffect } from "react";
import "./SensorList.css";

import { getSensors, Sensor } from "../../services/SensorService";

type RequestState =
  | { state: "LOADING" }
  | { state: "ERROR"; error: string }
  | { state: "LOADED"; sensors: Sensor[] };

const SensorList: React.FC = () => {
  const [request, setRequest] = useState<RequestState>({ state: "LOADING" });

  useEffect(() => {
    getSensors()
      .then(sensors => setRequest({ sensors, state: "LOADED" }))
      .catch(err => {
        console.error(err);
        setRequest({ error: err.message, state: "ERROR" });
      });
  }, []);

  if (request.state === "ERROR") {
    return <div className="SensorListError">{request.error}</div>;
  } else if (request.state === "LOADING") {
    return <div className="SensorListLoading">Loading...</div>;
  } else {
    return (
      <div className="SensorList">
        {request.sensors.map(({ id, name, description }) => (
          <div key={id} className="SensorListItem">
            <div className="SensorListName">{name}</div>
            <div className="SensorListDescription">{description}</div>
          </div>
        ))}
      </div>
    );
  }
};

export default SensorList;
