// Import: Dependencies
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

// Import: Screens
import {
  CardScreen,
  HomeScreen,
  PinScreen,
  SendRequestScreen,
  TouchScreen,
} from "./src/screens";

export default function App() {
  const AppStack = createStackNavigator();
  const TabStack = createBottomTabNavigator();

  const TabStackScreens = () => {
    return (
      <TabStack.Navigator>
        <TabStack.Screen name="Cards" component={CardScreen} />
        <TabStack.Screen name="Home" component={HomeScreen} />
        <TabStack.Screen name="SendRequest" component={SendRequestScreen} />
      </TabStack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode="none">
        <AppStack.Screen name="Pin" component={PinScreen} />
        <AppStack.Screen name="Touch" component={TouchScreen} />
        <AppStack.Screen name="Tabs" component={TabStackScreens} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
