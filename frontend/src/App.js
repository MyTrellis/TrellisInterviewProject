import React from 'react';
import './App.css';
import SensorList from './pages/SensorList/SensorList';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Sensor Viewer!</h1>
        </header>
        <SensorList />
      </div>
    );
  }
}

export default App;
