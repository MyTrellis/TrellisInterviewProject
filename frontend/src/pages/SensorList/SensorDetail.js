import React, { Component } from 'react';

class SensorDetail extends Component {
    componentDidMount() {
        // fetch data for this.props.sensorId and set to state
    }

    render() {
        return(
            <div>
                <h1>Sendsor Detail</h1>
                <p>{this.props.sensorId}</p>
            </div>
        ) 

    }

}



export default SensorDetail;