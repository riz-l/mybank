// Import: Dependencies
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";

// Import: Elements
import {
  Amount,
  Container,
  ProfilePhoto,
  Send,
  StatusBar,
  User,
  UserDetails,
} from "./SendRequestScreen.elements";

// Import: Components
import { NumberPad, Text } from "../../components";

// Screen: SendRequestScreen
export default function SendRequestScreen() {
  const [amount, setAmount] = useState("0");

  const convertToPounds = (currentAmount) => {
    const newAmount = currentAmount / 100;

    return newAmount.toLocaleString("en-GB", {
      style: "currency",
      currency: "GBP",
    });
  };

  const pressKey = (item, index) => {
    setAmount((prev) => {
      return index != 10 ? prev + item : prev.slice(0, prev.length - 1);
    });
  };

  return (
    <Container>
      <Text center large heavy margin="16px 0 0 0">
        Send
      </Text>

      <Amount>
        <Text title heavy>
          £{convertToPounds(amount)}
        </Text>
        <Text bold color="#727479">
          Choose amount to send
        </Text>
      </Amount>

      <User>
        <ProfilePhoto
          source={require("../../../assets/images/logos/steam.png")}
        />
        <UserDetails>
          <Text medium heavy>
            Steam
          </Text>
          <Text bold color="#727479">
            Steam Wallet Credit
          </Text>
        </UserDetails>
        <MaterialIcons name="edit" size={16} color="#ffffff" />
      </User>

      <Send>
        <Text medium heavy>
          Send £{convertToPounds(amount)} to Steam
        </Text>
      </Send>

      <NumberPad onPress={pressKey} />

      <StatusBar backgroundColor="#1e1e1e" barStyle="light-content" />
    </Container>
  );
}
