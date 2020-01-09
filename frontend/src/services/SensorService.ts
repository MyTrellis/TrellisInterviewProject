const serverURL = "http://localhost:9000";

export interface Sensor {
  id: string;
  name: string;
  description: string;
}

export const getSensors = () => {
  return fetch(`${serverURL}/sensors`).then(res => {
    if (res.status !== 200) {
      throw new Error("Error fetching sensors");
    }
    return res.json() as Promise<Sensor[]>;
  });
};
