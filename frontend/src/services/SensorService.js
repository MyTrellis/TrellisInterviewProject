const serverURL = 'http://localhost:9000';//connects to backend port

export const getSensors = () => {//fuction to retrieve sensors from backend
  return fetch(`${serverURL}/sensors`)//fetching this from servers backend
    .then(res => {
      if(res.status !== 200) {
        throw new Error('Error fetching sensors');
      }
      return res.json();//returns javascript object notation
    });
}

export const getSensor = (id) => {//fuction to retrieve sensors from backend
  return fetch(`${serverURL}/sensor/${id}`)//fetching this from servers backend
    .then(res => {
      if(res.status !== 200) {
        throw new Error('Error fetching sensor with id: '+id);
      }
      return res.json();//returns javascript object notation
    });
}