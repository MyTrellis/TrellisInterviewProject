import React from 'react';
import './SensorList.css';

import { getSensors } from '../../services/SensorService';

class SensorList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sensors: [],
      loading: true,
      error: '',
    };
  }

  componentDidMount() {
    getSensors()
      .then(sensors => this.setState({ sensors, loading: false }))
      .catch(err => {
        console.error(err);
        this.setState({ error: err.message, loading: false })
      });
  }

  render() {
    const { loading, sensors, error } = this.state;
    if(error) {
      return (
        <div className="SensorListError">
          {error}
        </div>
      );
    }
    if(loading) {
      return (
        <div className="SensorListLoading">
          Loading...
        </div>
      );
    }
    return (
      <div className="SensorList">
        {
          sensors.map(({ id, name, description }) => (
            <div key={id} className="SensorListItem">
              <div className="SensorListName">{name}</div>
              <div className="SensorListDescription">{description}</div>
            </div>
          ))
        }
      </div>
    );
  }
}

export default SensorList;
