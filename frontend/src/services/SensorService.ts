const serverURL = "http://localhost:9000";

export interface Sensor {
  id: string;
  name: string;
  description: string;
}

export const getSensors = async () => {
  const res = await fetch(`${serverURL}/sensors`);
  if (res.status !== 200) {
    throw new Error("Error fetching sensors");
  }
  return res.json() as Promise<Sensor[]>;
};
