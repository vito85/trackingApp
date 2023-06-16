import React from 'react';
import { StyleSheet, Button, Linking } from 'react-native';

const CallButton = ({ phoneNumber }) => {
  const callDriver = () => {
    const phoneNumberUrl = `tel:${phoneNumber}`;
    Linking.openURL(phoneNumberUrl);
  };

  return (
    <Button title="Позвонить" onPress={callDriver} style={styles.button} />
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    color: 'white',
    padding: 10,
    borderRadius: 5,
  },
});

export default CallButton;
