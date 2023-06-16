import React from 'react';
import { StyleSheet, Button, Linking, Platform } from 'react-native';

const SendMessageButton = ({ phoneNumber, onPress }) => {
  const sendMessage = () => {
    const message = 'Добрый день, подскажите пожалуйста, какой номер заказа у вас сейчас в работе';
    const whatsappURL = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    Linking.openURL(whatsappURL)
      .catch(() => {
        if (Platform.OS === 'ios') {
          Linking.openURL(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`);
        } else {
          Linking.openURL(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`);
        }
      });
  };

  return <Button title="Написать" onPress={onPress || sendMessage} style={styles.button} />;
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'green',
    color: 'white',
    padding: 10,
    borderRadius: 5,
  },
});

export default SendMessageButton;
