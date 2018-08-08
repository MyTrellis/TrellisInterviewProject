import React from 'react';//default import
import './SensorList.css';
import SensorDetail from './SensorDetail.js';


import { getSensors } from '../../services/SensorService';//function that fetch's sensors
//component SensorList
class SensorList extends React.Component {
  constructor(props) {
    super(props);
    //specify state object inside sensorlist component's constructor. Runs way before component gets rendered
    this.state = {
      sensors: [],
      loading: true,
      error: '',
    };
  }
//properties: sensors, loading, error
//telling react to set these props to ([], true, '')

  componentDidMount() {
    getSensors()
      .then(sensors => this.setState({ sensors, loading: false }))//once it gets the sensors, it is not loading. sets state to sensors
      .catch(err => {
        console.error(err);
        this.setState({ error: err.message, loading: false })
      });
      //catch statement lets you handle if error with an error message
  }

  render() {
    const { loading, sensors, error } = this.state;//all of these could be the state
    if(error) {//if its an error statement
      return (//this is that it will return
        <div className="SensorListError">
          {error}
        </div>
      );
    }
    if(loading) {//if loading
      return (
        <div className="SensorListLoading">
          Loading...
        </div>
      );
    }
    return (//normally, this is that it should return
      <div className="SensorList">
        {
          sensors.map(({ id, name, description, type }) => (//gonna return all these value in the array
            <div key={id} className="SensorListItem">
              <div className="SensorListName">{name}</div>
              <div className="SensorListDescription">{description}</div>
              <div className="SensorListType">{type}</div>
              <SensorDetail/>
{/* //details. when clicked, takes you to new route or shows new componnet */}
            </div>
          ))
        }
      </div>
    );
  }
}

export default SensorList;//able to be used by other programs with import statement
