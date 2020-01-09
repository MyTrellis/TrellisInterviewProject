import React, { useState, useEffect } from "react";
import styled from "styled-components";

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
    return <ErrorText>{request.error}</ErrorText>;
  }

  if (request.state === "LOADING") {
    return <LoadingText>Loading...</LoadingText>;
  }

  return (
    <ListContainer>
      {request.sensors.map(({ id, name, description }) => (
        <SensorCard key={id}>
          <Name>{name}</Name>
          <div>{description}</div>
        </SensorCard>
      ))}
    </ListContainer>
  );
};

const ListContainer = styled.div`
  width: 100%;
`;

const SensorCard = styled.div`
  background: white;
  margin: auto;
  margin-top: 24px;
  max-width: 400px;
  text-align: left;
  padding: 10px;
  border-radius: 0px 8px 8px 0px;
  box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);
  border-left: 6px solid #87c38f;
`;

const Name = styled.div`
  font-size: 2rem;
`;

const ErrorText = styled.div`
  margin: 24px;
`;

const LoadingText = styled.div`
  margin: 24px;
`;

export default SensorList;
