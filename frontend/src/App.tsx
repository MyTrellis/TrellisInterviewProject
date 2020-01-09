import React from "react";
import styled from "styled-components";

import SensorList from "./pages/SensorList/SensorList";

const App: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>Sensor Viewer</Title>
      </Header>
      <SensorList />
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
`;

const Header = styled.header`
  background-color: #226f54;
  height: 70px;
  padding: 20px;
  color: white;
`;

const Title = styled.h1`
  font-size: 2em;
`;

export default App;
