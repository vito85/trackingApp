import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const SettingsScreen = () => {
  const [isRussian, setIsRussian] = useState(false);

  const toggleLanguage = () => {
    setIsRussian((prevIsRussian) => !prevIsRussian);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Язык</Text>
      <Switch
        value={isRussian}
        onValueChange={toggleLanguage}
        thumbColor={isRussian ? '#3498db' : '#f1c40f'}
        trackColor={{ true: '#bdc3c7', false: '#bdc3c7' }}
      />
      <Text style={styles.languageText}>{isRussian ? 'Русский' : 'English'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  languageText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default SettingsScreen;
