// Import: Dependencies
import React from "react";
import { Fontisto, MaterialIcons } from "@expo/vector-icons";

// Import: Elements
import {
  Circle,
  Container,
  PinAccess,
  StatusBar,
  Touch,
  TouchButton,
} from "./TouchScreen.elements";

// Import: Components
import { Text } from "../../components";

// Screen: TouchScreen
export default function TouchScreen({ navigation }) {
  return (
    <Container>
      <Text center heavy title color="#964ff0" margin="32px 0 0 0">
        mybank
      </Text>

      <Touch onLongPress={() => navigation.navigate("Tabs")} delayPressIn={0}>
        <Circle bgColor="#1e1e1e">
          <Circle bgColor="#5196f405">
            <Circle bgColor="#5196f410">
              <Circle bgColor="#5196f430">
                <TouchButton>
                  <MaterialIcons name="fingerprint" size={64} color="#ffffff" />
                </TouchButton>
              </Circle>
            </Circle>
          </Circle>
        </Circle>
      </Touch>

      <Text center heavy large>
        Touch ID sensor for access to{"\n"}your mybank account.
      </Text>

      <Text center bold margin="16px 0 0 0" color="#9c9c9f">
        Please verify your identity{"\n"}using Touch ID
      </Text>

      <PinAccess onPress={() => navigation.navigate("Pin")} delayPressIn={0}>
        <Fontisto name="locked" color="#964ff0" size={16} />
        <Text bold margin="0 0 0 8px" color="#964ff0">
          Enter access PIN
        </Text>
      </PinAccess>

      <StatusBar backgroundColor="#1e1e1e" barStyle="light-content" />
    </Container>
  );
}
