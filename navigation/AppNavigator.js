import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import VehicleDetailsScreen from "../componets/screens/CallButton"

import VehicleListScreen from '../componets/screens/VehicleDetailsScreen';
//import VehicleDetailsScreen from '../screens/VehicleDetailsScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="VehicleList" component={VehicleListScreen} options={{ title: 'Vehicle List' }} />
        <Stack.Screen name="VehicleDetails" component={VehicleDetailsScreen} options={{ title: 'Vehicle Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
