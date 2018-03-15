const serverURL = 'http://localhost:9000';

export const getSensors = () => {
  return fetch(`${serverURL}/sensors`)
    .then(res => {
      if(res.status !== 200) {
        throw new Error('Error fetching sensors');
      }
      return res.json();
    });
}