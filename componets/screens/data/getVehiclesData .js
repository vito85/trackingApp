
  
import vehiclesData from './vehicles.json';

export const getVehiclesData = () => {
  return new Promise((resolve, reject) => {
    try {
      resolve(vehiclesData);
      console.log(vehiclesData)
    } catch (error) {
      reject(error);
    }
  });
};


