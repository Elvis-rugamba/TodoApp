import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';

import Home from '../screens/Home';

export type StackParamList = {
  Home: undefined;
  Details: { itemId: number };
  NewTask: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

const AppNavigator = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
      name="Home"
      component={Home}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Details"
      component={() => (
        <View>
          <Text>Details</Text>
        </View>
      )}
      options={{ headerTitle: '' }}
    />
    <Stack.Screen
      name="NewTask"
      component={() => (
        <View>
          <Text>New Task</Text>
        </View>
      )}
      options={{ headerTitle: '' }}
    />
  </Stack.Navigator>
);

export default AppNavigator;
