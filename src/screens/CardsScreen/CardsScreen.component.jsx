// Import: Dependencies
import React from "react";

// Import: Elements
import {
  CardActions,
  CardContainer,
  CardDetails,
  CardInfo,
  CardLogo,
  CardLogoContainer,
  Cards,
  Container,
  Remove,
  StatusBar,
  Update,
} from "./CardsScreen.elements";

// Import: Components
import { Text } from "../../components";

// Screen: CardsScreen
export default function CardsScreen() {
  const myCards = [
    {
      id: "1",
      color: "#5750f0",
      number: "1234",
      exp: "10/2020",
      logo: require("../../../assets/images/logos/visa-white.png"),
    },
    {
      id: "2",
      color: "#c84ff1",
      number: "5678",
      exp: "08/2022",
      logo: require("../../../assets/images/logos/amazon-white.png"),
    },
    {
      id: "3",
      color: "#5298f7",
      number: "9012",
      exp: "04/2023",
      logo: require("../../../assets/images/logos/paypal-white.png"),
    },
    {
      id: "4",
      color: "#974ff2",
      number: "3456",
      exp: "02/2021",
      logo: require("../../../assets/images/logos/mastercard-white.png"),
    },
  ];

  const renderCard = ({ item }) => (
    <CardContainer>
      <CardInfo>
        <CardLogoContainer bgColor={item.color}>
          <CardLogo source={item.logo} resizeMode="contain" />
        </CardLogoContainer>

        <CardDetails>
          <Text heavy>
            &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull;
            &bull;&bull;&bull;&bull;{" "}
            <Text medium heavy>
              {item.number}
            </Text>
          </Text>
          <Text small heavy color="#727479" margin="4px 0 0 0">
            {item.exp}
          </Text>
        </CardDetails>
      </CardInfo>

      <CardActions>
        <Remove>
          <Text heavy color="#727479">
            Remove
          </Text>
        </Remove>

        <Update>
          <Text heavy>Update</Text>
        </Update>
      </CardActions>
    </CardContainer>
  );

  return (
    <Container>
      <Text center large heavy margin="16px 0 0 0">
        My Cards
      </Text>

      <Cards data={myCards} renderItem={renderCard} />

      <StatusBar backgroundColor="#1e1e1e" barStyle="light-content" />
    </Container>
  );
}
