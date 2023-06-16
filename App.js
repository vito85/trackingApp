// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Hello</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// import React, { useState } from 'react';
// import { View, Text, Button } from 'react-native';

// const TSListScreen = () => {
//   const [selectedCategories, setSelectedCategories] = useState([]);

//   const handleCategoryToggle = (category) => {
//     // Проверяем, есть ли категория в списке выбранных
//     const isSelected = selectedCategories.includes(category);

//     if (isSelected) {
//       // Если категория уже выбрана, удаляем ее из списка выбранных
//       setSelectedCategories(selectedCategories.filter((cat) => cat !== category));
//     } else {
//       // Если категория не выбрана, добавляем ее в список выбранных
//       setSelectedCategories([...selectedCategories, category]);
//     }
//   };

//   return (
//     <View>
//       <Text>Список ТС</Text>

//       {/* Кнопки фильтрации */}
//       <View>
//         <Button
//           title="Грузовой"
//           onPress={() => handleCategoryToggle('Грузовой')}
//           color={selectedCategories.includes('Грузовой') ? 'green' : 'gray'}
//         />
//         <Button
//           title="Пассажирский"
//           onPress={() => handleCategoryToggle('Пассажирский')}
//           color={selectedCategories.includes('Пассажирский') ? 'green' : 'gray'}
//         />
//         <Button
//           title="Спецтранспорт"
//           onPress={() => handleCategoryToggle('Спецтранспорт')}
//           color={selectedCategories.includes('Спецтранспорт') ? 'green' : 'gray'}
//         />
//       </View>

//       {/* Отображение выбранных категорий */}
//       <Text>Выбранные категории: {selectedCategories.join(', ')}</Text>

//       {/* Отображение списка ТС */}
//       {/* TODO: Добавьте код для отображения списка ТС */}
//     </View>
//   );
// };

// export default TSListScreen;



// import React, { useState } from 'react';
// import { View, Text, FlatList, TouchableOpacity } from 'react-native';

// const TSListScreen = () => {
//   const [tsList, setTSList] = useState([
//     { id: 1, driverName: 'Иван Иванов', category: 'Грузовой' },
//     { id: 2, driverName: 'Петр Петров', category: 'Пассажирский' },
//     { id: 3, driverName: 'Сергей Сидоров', category: 'Спецтранспорт' },
//     // Добавьте остальные данные ТС сюда...
//   ]);

//   const renderTSItem = ({ item }) => {
//     return (
//       <TouchableOpacity style={styles.tsItem}>
//         <Text style={styles.tsName}>ТС #{item.id}</Text>
//         <Text style={styles.driverName}>{item.driverName}</Text>
//         <Text style={styles.category}>{item.category}</Text>
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={tsList}
//         renderItem={renderTSItem}
//         keyExtractor={(item) => item.id.toString()}
//       />
//     </View>
//   );
// };

// const styles = {
//   container: {
//     flex: 1,
//     padding: 16,
//   },
//   tsItem: {
//     borderBottomWidth: 1,
//     borderBottomColor: 'gray',
//     paddingVertical: 8,
//   },
//   tsName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   driverName: {
//     fontSize: 14,
//     marginTop: 4,
//   },
//   category: {
//     fontSize: 12,
//     marginTop: 2,
//   },
// };

// export default TSListScreen;




// import React, { useState } from 'react';
// import { View, Text, FlatList, TouchableOpacity, Switch } from 'react-native';

// const TSListScreen = () => {
//   const [tsList, setTSList] = useState([
//     { id: 1, driverName: 'Иван Иванов', category: 'Грузовой' },
//     { id: 2, driverName: 'Петр Петров', category: 'Пассажирский' },
//     { id: 3, driverName: 'Сергей Сидоров', category: 'Спецтранспорт' },
//     // Добавьте остальные данные ТС сюда...
//   ]);

//   const [isMapMode, setIsMapMode] = useState(false);

//   const renderTSItem = ({ item }) => {
//     return (
//       <TouchableOpacity style={styles.tsItem}>
//         <Text style={styles.tsName}>ТС #{item.id}</Text>
//         <Text style={styles.driverName}>{item.driverName}</Text>
//         <Text style={styles.category}>{item.category}</Text>
//       </TouchableOpacity>
//     );
//   };

//   const renderMapView = () => {
//     // Реализуйте компонент отображения карты здесь
//     return (
//       <View style={styles.mapView}>
//         {/* Реализуйте отображение местоположения ТС на карте */}
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.headerText}>Список ТС</Text>
//         <Switch
//           value={isMapMode}
//           onValueChange={(value) => setIsMapMode(value)}
//         />
//       </View>

//       {isMapMode ? (
//         renderMapView()
//       ) : (
//         <FlatList
//           data={tsList}
//           renderItem={renderTSItem}
//           keyExtractor={(item) => item.id.toString()}
//         />
//       )}
//     </View>
//   );
// };

// const styles = {
//   container: {
//     flex: 1,
//     padding: 16,
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginBottom: 16,
//   },
//   headerText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   tsItem: {
//     borderBottomWidth: 1,
//     borderBottomColor: 'gray',
//     paddingVertical: 8,
//   },
//   tsName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   driverName: {
//     fontSize: 14,
//     marginTop: 4,
//   },
//   category: {
//     fontSize: 12,
//     marginTop: 2,
//   },
//   mapView: {
//     flex: 1,
//     backgroundColor: 'lightgray',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// };

// export default TSListScreen;


// import React, { useState } from 'react';
// import { View, Button, FlatList, Text,StyleSheet  } from 'react-native';
// import SettingsScreen from "./SettingsScreen"

// const VehicleList = () => {
//   const [vehicles, setVehicles] = useState([
//     { id: 1, name: 'Vehicle 1', category: 'Грузовой' },
//     { id: 2, name: 'Vehicle 2', category: 'Пассажирский' },
//     { id: 3, name: 'Vehicle 3', category: 'Спецтранспорт' },
//     // Add more vehicle data here
//   ]);

//   const [filteredVehicles, setFilteredVehicles] = useState(vehicles);
//   const [selectedCategories, setSelectedCategories] = useState([]);

//   const applyFilter = () => {
//     if (selectedCategories.length === 0) {
//       setFilteredVehicles(vehicles);
//     } else {
//       const filtered = vehicles.filter((vehicle) =>
//         selectedCategories.includes(vehicle.category)
//       );
//       setFilteredVehicles(filtered);
//     }
//   };

//   const toggleCategory = (category) => {
//     if (selectedCategories.includes(category)) {
//       const updatedCategories = selectedCategories.filter(
//         (selectedCategory) => selectedCategory !== category
//       );
//       setSelectedCategories(updatedCategories);
//     } else {
//       setSelectedCategories([...selectedCategories, category]);
//     }
//   };

//   const renderItem = ({ item }) => (
//     <View style={{ padding: 10 }}>
//       <Text>{item.name}</Text>
//       <Text>{item.category}</Text>
//     </View>
//   );

//   return (
//     <View>
//       <Button title="Грузовой"   onPress={() => toggleCategory('Грузовой')} />
//       <Button
//         title="Пассажирский"
//         onPress={() => toggleCategory('Пассажирский')}
//       />
//       <Button title="Спецтранспорт" onPress={() => toggleCategory('Спецтранспорт')} />
//       <Button title="Применить" onPress={applyFilter} />
//       <Button title="Язык" onPress={SettingsScreen} />

//       <FlatList
//         data={filteredVehicles}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id.toString()}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   button: {
//     marginBottom: 10,
//     padding: 10,
//     borderRadius: 5,
//     backgroundColor: '#3498db',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });


// export default VehicleList;


//============================================================


import {StyleSheet,View,Text,FlatList,AppLoading} from "react-native";
import React, {useState} from "react";
import SettingsScreen from "./componets/SettingsScreen"; 
import Vehicle from "./componets/Vehicle"
import RenderMaps from "./componets/RenderMaps";
import VehicleListScreen from "./componets/screens/VehicleDetailsScreen"
import AppNavigator from "./navigation/AppNavigator"
import CallButton from "./componets/screens/CallButton"
import SendMessageButton from "./componets/screens/SendMessageButton"
//import MapView from "./componets/MapView.web"
//import  {gStyle} from "./styles/style"




export default function App(){
  
  return (
   
    <View >
      <View >
      <CallButton></CallButton>
      <SendMessageButton></SendMessageButton>
      </View>
      <VehicleListScreen></VehicleListScreen>
      
      {/* <VehicleDetailsScreen></VehicleDetailsScreen> */}
      {/* <AppNavigator></AppNavigator> */}
      {/* <Vehicle></Vehicle> */}
      {/* <MapView></MapView> */}
      <SettingsScreen></SettingsScreen>
      <RenderMaps  ></RenderMaps>
      
    </View>
    
  );
}
