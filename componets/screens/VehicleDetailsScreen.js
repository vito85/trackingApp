// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, TouchableOpacity, Switch } from 'react-native';
// import { getVehiclesData } from './data/getVehiclesData '; // Assuming you have an api.js file with a function to fetch the vehicle data

// const VehicleListScreen = () => {
//   const [showMap, setShowMap] = useState(false);
//   const [filteredCategory, setFilteredCategory] = useState(null);
//   const [vehicles, setVehicles] = useState([]);



//   const fetchVehicles = async () => {
//     try {
//       // Replace 'getVehiclesData' with your function to fetch the data from vehicles.json or an API
//       const data = await getVehiclesData();
//       setVehicles(data);
//     } catch (error) {
//       console.log('Error fetching vehicle data:', error);
//     }
//   };

//   useEffect(() => {
//     // Fetch vehicle data from the JSON file or an API
//     fetchVehicles();
//   }, []);




//   const toggleShowMap = () => {
//     setShowMap((prevShowMap) => !prevShowMap);
//   };

//   const toggleFilter = (category) => {
//     setFilteredCategory(category);
//   };

//   const renderItem = ({ item }) => (
//     <TouchableOpacity style={styles.itemContainer}>
//       <Text style={styles.itemTitle}>{item.name}</Text>
//       <Text>{`Имя водителя: ${item.driver}`}</Text>
//       <Text>{`Категория: ${item.category}`}</Text>
//     </TouchableOpacity>
//   );

//   const filteredVehicles = filteredCategory
//      vehicles.filter((vehicle) => vehicle.category === filteredCategory)
//     : vehicles;

//   return (
//     <View style={styles.container}>
//       <View style={styles.filterContainer}>
//         <Text>Фильтр по категориям:</Text>
//         <View style={styles.switchContainer}>
//           <Text>Грузовой</Text>
//           <Switch
//             value={filteredCategory === 'Грузовой'}
//             onValueChange={() => toggleFilter('Грузовой')}
//           />
//         </View>
//         <View style={styles.switchContainer}>
//           <Text>Пассажирский</Text>
//           <Switch
//             value={filteredCategory === 'Пассажирский'}
//             onValueChange={() => toggleFilter('Пассажирский')}
//           />
//         </View>
//         <View style={styles.switchContainer}>
//           <Text>Спецтранспорт</Text>
//           <Switch
//             value={filteredCategory === 'Спецтранспорт'}
//             onValueChange={() => toggleFilter('Спецтранспорт')}
//           />
//         </View>
//         <TouchableOpacity style={styles.applyButton} onPress={() => console.log('Filter applied')}>
//           <Text style={styles.applyButtonText}>Применить</Text>
//         </TouchableOpacity>
//       </View>
//       {showMap ? (
//         <Text>Карта будет здесь</Text>
//       ) : (
//         <FlatList
//           data={filteredVehicles}
//           renderItem={renderItem}
//           keyExtractor={(item) => item.id.toString()}
//         />
//       )}
//       <TouchableOpacity style={styles.toggleButton} onPress={toggleShowMap}>
//         <Text style={styles.toggleButtonText}>
//           {showMap ? 'Показать список' : 'Показать на карте'}
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = {
//   container: {
//     flex: 1,
//     padding: 16,
//   },
//   filterContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   switchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginHorizontal: 8,
//   },
//   applyButton: {
//     backgroundColor: 'blue',
//     paddingHorizontal: 12,
//     paddingVertical: 8,
//     borderRadius: 4,
//   },
//   applyButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   toggleButton: {
//     marginTop: 16,
//     alignSelf: 'center',
//   },
//   toggleButtonText: {
//     color: 'blue',
//     fontWeight: 'bold',
//   },
//   itemContainer: {
//     marginBottom: 16,
//     padding: 8,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 4,
//   },
//   itemTitle: {
//     fontWeight: 'bold',
//     marginBottom: 4,
//   },
// };

// export default VehicleListScreen;



import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Switch } from 'react-native';
//import MapView, { Marker } from 'react-native-maps';
import { getVehiclesData } from './data/getVehiclesData '; // Assuming you have an api.js file with a function to fetch the vehicle data

const VehicleListScreen = () => {
  const [showMap, setShowMap] = useState(false);
  const [filteredCategory, setFilteredCategory] = useState(null);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    // Fetch vehicle data from the JSON file or an API
    fetchVehicles();
  }, []);

  const fetchVehicles = async () => {
    try {
      // Replace 'getVehiclesData' with your function to fetch the data from vehicles.json or an API
      const data = await getVehiclesData();
      setVehicles(data.vehicles);
    } catch (error) {
      console.log('Error fetching vehicle data:', error);
    }
  };

  const toggleShowMap = () => {
    setShowMap((prevShowMap) => !prevShowMap);
  };

  const toggleFilter = (category) => {
    setFilteredCategory(category);
  };

  const filteredVehicles = filteredCategory
    ? vehicles.filter((vehicle) => vehicle.category === filteredCategory)
    : vehicles;

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}>
      <Text style={styles.itemTitle}>{item.name}</Text>
      <Text>{`Имя водителя: ${item.driver}`}</Text>
      <Text>{`Категория: ${item.category}`}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <Text>Фильтр по категориям:</Text>
        <View style={styles.switchContainer}>
          <Text>Грузовой</Text>
          <Switch
            value={filteredCategory === 'Грузовой'}
            onValueChange={() => toggleFilter('Грузовой')}
          />
        </View>
        <View style={styles.switchContainer}>
          <Text>Пассажирский</Text>
          <Switch
            value={filteredCategory === 'Пассажирский'}
            onValueChange={() => toggleFilter('Пассажирский')}
          />
        </View>
        <View style={styles.switchContainer}>
          <Text>Спецтранспорт</Text>
          <Switch
            value={filteredCategory === 'Спецтранспорт'}
            onValueChange={() => toggleFilter('Спецтранспорт')}
          />
        </View>
        <TouchableOpacity style={styles.applyButton} onPress={() => console.log('Filter applied')}>
          <Text style={styles.applyButtonText}>Применить</Text>
        </TouchableOpacity>
      </View>
      {showMap ? (
        <MapView style={styles.map} initialRegion={{ latitude: 37.78825, longitude: -122.4324, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}>
          {filteredVehicles.map((vehicle) => (
            <Marker
              key={vehicle.id}
              coordinate={{ latitude: vehicle.latitude, longitude: vehicle.longitude }}
              title={vehicle.name}
              description={`Имя водителя: ${vehicle.driver}`}
            />
          ))}
        </MapView>
      ) : (
        <FlatList
          data={filteredVehicles}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ paddingBottom: 16 }}
        />
      )}
      <TouchableOpacity style={styles.toggleButton} onPress={toggleShowMap}>
        <Text style={styles.toggleButtonText}>{showMap ? 'Показать список' : 'Показать на карте'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    padding: 16,
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  applyButton: {
    backgroundColor: 'blue',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 4,
  },
  applyButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  toggleButton: {
    marginTop: 16,
    alignSelf: 'center',
  },
  toggleButtonText: {
    color: 'blue',
    fontWeight: 'bold',
  },
  itemContainer: {
    marginBottom: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  itemTitle: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  map: {
    flex: 1,
    marginBottom: 16,
    borderRadius: 4,
  },
};

export default VehicleListScreen;

