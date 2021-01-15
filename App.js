// Import: Dependencies
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MatericalIcons } from "@expo/vector-icons";

// Import: Screens
import { HomeScreen, PinScreen, TouchScreen } from "./src/screens";

export default function App() {
  const AppStack = createStackNavigator();

  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode="none">
        <AppStack.Screen name="Pin" component={PinScreen} />
        <AppStack.Screen name="Touch" component={TouchScreen} />
        <AppStack.Screen name="Home" component={HomeScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
