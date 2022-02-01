import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import NewTask from '../screens/NewTask';
import Details from '../screens/Details';

export type StackParamList = {
  Home: undefined;
  Details: { itemId: number };
  NewTask: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

const AppNavigator = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Details" component={Details} />
    <Stack.Screen name="NewTask" component={NewTask} />
  </Stack.Navigator>
);

export default AppNavigator;
