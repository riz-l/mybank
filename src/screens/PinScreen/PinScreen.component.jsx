// Import: Dependencies
import React, { useState, useEffect } from "react";
import { Fontisto } from "@expo/vector-icons";

// Import: Elements
import {
  AccessPin,
  Container,
  Pin,
  PinContainer,
  StatusBar,
  UseTouch,
} from "./PinScreen.elements";

// Import: Components
import { NumberPad, Text } from "../../components";

// Screen: PinScreen
export default function PinScreen({ navigation }) {
  const [pinCount, setPinCount] = useState(0);
  const totalPins = 6;

  useEffect(() => {
    if (pinCount === totalPins) {
      navigation.navigate("Home");
    }
  }, [pinCount]);

  const renderPins = () => {
    const pins = [];

    for (let x = 1; x <= totalPins; x++) {
      pins.push(
        x <= pinCount ? (
          <PinContainer key={x}>
            <Pin />
          </PinContainer>
        ) : (
          <PinContainer key={x} />
        )
      );
    }

    return pins;
  };

  const pressKey = (_, index) => {
    setPinCount((prev) => {
      return index != 10 ? prev + 1 : prev - 1;
    });
  };

  return (
    <Container>
      <Text center heavy title color="#964ff0" margin="32px 0 0 0">
        mybank
      </Text>
      <Text center heavy medium margin="32px 0 0 0">
        Enter your PIN code.
      </Text>

      <AccessPin>{renderPins()}</AccessPin>

      <Text center bold margin="8px 0 0 0" color="#9c9c9f">
        Forgot PIN?
      </Text>

      <UseTouch onPress={() => navigation.navigate("Touch")}>
        <Fontisto name="locked" color="#964ff0" size={16} />
        <Text bold margin="0 0 0 8px" color="#964ff0">
          Use Touch ID
        </Text>
      </UseTouch>

      <NumberPad onPress={pressKey} />

      <StatusBar barStyle="light-content" />
    </Container>
  );
}
