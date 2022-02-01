import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';

import Home from '../screens/Home';
import NewTask from '../screens/NewTask';

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
    <Stack.Screen
      name="Details"
      component={() => (
        <View>
          <Text>Details</Text>
        </View>
      )}
    />
    <Stack.Screen name="NewTask" component={NewTask} />
  </Stack.Navigator>
);

export default AppNavigator;
