// src/navigation/AppNavigator.js
import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AuthNavigator from './AuthNavigator';
import BottomTabNavigator from './BottomTabNavigator';
import {AuthContext} from '../context/AuthContext';
import FilterScreen from '../modules/home/filter/FilterScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const {isAuthenticated} = useContext(AuthContext); // Custom context to manage auth state

  return (
    <Stack.Navigator>
      {isAuthenticated ? (
        <>
          <Stack.Screen
            name="App"
            component={BottomTabNavigator}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Filter"
            component={FilterScreen}
            options={{headerShown: false}}
          />
        </>
      ) : (
        <Stack.Screen
          name="Auth"
          component={AuthNavigator}
          options={{headerShown: false}}
        />
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;
