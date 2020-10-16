import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home'
import Pages from './components/Pages'

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator  initialRouteName="Home"
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#000"
          },
          headerTintColor: "#f4f4f4",
          headerTitleStyle: {
            fontWeight: "bold"
          }
        }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Pages" component={Pages} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}


