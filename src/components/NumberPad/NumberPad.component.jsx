// Import: Dependencies
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

// Import: Elements
import { Container, KeyPad, Number } from "./NumberPad.elements";

// Import: Components
import Text from "../Text/Text.component";

// Component: NumberPad
export default function NumberPad({ onPress }) {
  const buttons = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    <MaterialIcons name="keyboard-backspace" size={24} />,
  ];

  return (
    <Container>
      <KeyPad>
        {buttons.map((item, index) => {
          return (
            <Number
              key={index}
              onPress={() => onPress(item, index)}
              delayPressIn={0}
            >
              <Text large heavy>
                {item}
              </Text>
            </Number>
          );
        })}
      </KeyPad>
    </Container>
  );
}
