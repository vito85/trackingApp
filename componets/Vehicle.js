
import React, { useState } from 'react';
import { View, Button, FlatList, Text,StyleSheet  } from 'react-native';


const VehicleList = () => {
  const [vehicles, setVehicles] = useState([
    { id: 1, name: 'Vehicle 1', category: 'Грузовой' },
    { id: 2, name: 'Vehicle 2', category: 'Пассажирский' },
    { id: 3, name: 'Vehicle 3', category: 'Спецтранспорт' },
    // Add more vehicle data here
  ]);

  const [filteredVehicles, setFilteredVehicles] = useState(vehicles);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const applyFilter = () => {
    if (selectedCategories.length === 0) {
      setFilteredVehicles(vehicles);
    } else {
      const filtered = vehicles.filter((vehicle) =>
        selectedCategories.includes(vehicle.category)
      );
      setFilteredVehicles(filtered);
    }
  };

  const toggleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      const updatedCategories = selectedCategories.filter(
        (selectedCategory) => selectedCategory !== category
      );
      setSelectedCategories(updatedCategories);
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const renderItem = ({ item }) => (
    <View style={{ padding: 10 }}>
      <Text>{item.name}</Text>
      <Text>{item.category}</Text>
    </View>
  );

  return (
    <View>
      <Button title="Грузовой"   onPress={() => toggleCategory('Грузовой')} />
      <Button
        title="Пассажирский"
        onPress={() => toggleCategory('Пассажирский')}
      />
      <Button title="Спецтранспорт" onPress={() => toggleCategory('Спецтранспорт')} />
      <Button title="Применить" onPress={applyFilter} />
      

      <FlatList
        data={filteredVehicles}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#3498db',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});


export default VehicleList;