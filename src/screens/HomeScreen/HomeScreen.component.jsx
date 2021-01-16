// Import: Dependencies
import React from "react";
import { Dimensions } from "react-native";
import { FontAwesome5, MaterialIcons, AntDesign } from "@expo/vector-icons";
import { LineChart } from "react-native-chart-kit";

// Import: Data
import purchaseHistory from "../../../data/purchaseHistory";

// Import: Elements
import {
  Chart,
  Container,
  Header,
  ProfilePhoto,
  Purchase,
  PurchaseInfo,
  Purchases,
  Search,
  SearchContainer,
  StatusBar,
  TransactionsHeader,
  Welcome,
} from "./HomeScreen.elements";

// Import: Components
import { Text } from "../../components";

// Screen: HomeScreen
export default function HomeScreen() {
  const renderPurchase = ({ item }) => (
    <Purchase>
      <PurchaseInfo>
        <Text heavy>{item.product}</Text>
        <Text bold margin="2px 0 2px 0">
          {item.store}
        </Text>
        <Text small color="#727479">
          {item.address}
        </Text>
      </PurchaseInfo>

      <Text heavy>£{item.price}</Text>
    </Purchase>
  );

  return (
    <Container>
      <Header>
        <ProfilePhoto
          source={require("../../../assets/images/profilePhoto.png")}
        />

        <Welcome>
          <Text heavy medium>
            Welcome,
          </Text>
          <Text>Joshua Layton</Text>
        </Welcome>

        <FontAwesome5 name="cog" size={24} color="#565656" />
      </Header>

      <Text center title black>
        £7,245.68
      </Text>
      <Text center heavy color="#727479">
        Current Balance
      </Text>

      <Chart>
        <LineChart
          data={{
            labels: ["Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
            datasets: [
              {
                data: [
                  Math.random() * 10,
                  Math.random() * 10,
                  Math.random() * 10,
                  Math.random() * 10,
                  Math.random() * 10,
                  Math.random() * 10,
                ],
              },
            ],
          }}
          width={Dimensions.get("window").width}
          height={250}
          yAxisLabel="£"
          yAxisSuffix="k"
          chartConfig={{
            backgroundGradientFrom: "#1e1e1e",
            backgroundGradientTo: "#1e1e1e",
            color: (opacity = 1) => `rgba(81, 150, 244, ${opacity})`,
            labelColor: () => `rgba(255, 255, 255, 0.2)`,
            strokeWidth: 3,
          }}
          withVerticalLines={false}
          withHorizontalLines={false}
          bezier
        />
      </Chart>

      <Purchases
        ListHeaderComponent={
          <>
            <TransactionsHeader>
              <Text>Last Purchases</Text>
              <MaterialIcons name="sort" size={24} color="#5196f4" />
            </TransactionsHeader>

            <SearchContainer>
              <AntDesign name="search1" size={18} color="#5196f4" />
              <Search placeholder="Search Transactions" />
            </SearchContainer>
          </>
        }
        data={purchaseHistory}
        renderItem={renderPurchase}
        showsVerticalScrollIndicator={false}
      />

      <StatusBar backgroundColor="#1e1e1e" barStyle="light-content" />
    </Container>
  );
}
