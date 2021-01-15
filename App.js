// Import: Dependencies
import React from "react";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

// Import: Screens
import {
  CardsScreen,
  HomeScreen,
  PinScreen,
  SendRequestScreen,
  TouchScreen,
} from "./src/screens";

export default function App() {
  const AppStack = createStackNavigator();
  const TabStack = createBottomTabNavigator();

  const tabBarOptions = {
    showLabel: Platform.OS === "android" ? false : true,
    labelStyle: {
      fontSize: 12,
    },
    style: {
      backgroundColor: "#1e1e1e",
      borderTopColor: "#1e1e1e",
      height: 65,
    },
  };

  const screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused }) => {
      let icon = "";
      const color = focused ? "#559dff" : "#828282";
      const size = 24;

      switch (route.name) {
        case "Cards":
          icon = "credit-card";
          break;

        case "SendRequest":
          icon = "send";
          break;

        default:
          icon = "dashboard";
      }

      return <MaterialIcons name={icon} size={size} color={color} />;
    },
  });

  const TabStackScreens = () => {
    return (
      <TabStack.Navigator
        tabBarOptions={tabBarOptions}
        screenOptions={screenOptions}
      >
        <TabStack.Screen name="Home" component={HomeScreen} />
        <TabStack.Screen
          name="SendRequest"
          component={SendRequestScreen}
          options={{ title: "Send & Request" }}
        />
        <TabStack.Screen
          name="Cards"
          component={CardsScreen}
          options={{ title: "My Cards" }}
        />
      </TabStack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode="none">
        <AppStack.Screen name="Tabs" component={TabStackScreens} />
        <AppStack.Screen name="Touch" component={TouchScreen} />
        <AppStack.Screen name="Pin" component={PinScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
