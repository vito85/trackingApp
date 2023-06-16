import React from 'react';
import { View, Text, Button, Linking } from 'react-native';

const VehicleDetailsScreen = ({ route }) => {
  const { vehicle } = route.params;

  const handleCall = () => {
    const phoneNumber = vehicle.contactNumber;
    Linking.openURL(`tel:${phoneNumber}`);
  };

  const handleChat = () => {
    const message = 'Добрый день, подскажите пожалуйста, какой номер заказа у вас сейчас в работе';
    const url = `whatsapp://send?phone=${vehicle.contactNumber}&text=${encodeURIComponent(message)}`;
    Linking.openURL(url);
  };

  return (
    <View>
      <Text>Категория ТС: {vehicle.category}</Text>
      <Text>Имя водителя: {vehicle.driverName}</Text>
      <Text>Контактный номер: {vehicle.contactNumber}</Text>

      <Button title="Позвонить" onPress={handleCall} />
      <Button title="Написать" onPress={handleChat} />
    </View>
  );
};

export default VehicleDetailsScreen;
