// Import: Dependencies
import styled from "styled-components/native";

// Element: Container
export const Container = styled.SafeAreaView`
  background-color: #1e1e1e;
  flex: 1;
`;

// Element: Header
export const Header = styled.View`
  align-items: center;
  flex-direction: row;
  margin: 16px 16px 32px 16px;
`;

// Element: ProfilePhoto
export const ProfilePhoto = styled.Image`
  border-radius: 20px;
  height: 40px;
  width: 40px;
`;

// Element: Purchase
export const Purchase = styled.View`
  border-bottom-color: #393939;
  border-bottom-width: 1px;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 12px;
  padding-bottom: 12px;
`;

// Element: PurchaseInfo
export const PurchaseInfo = styled.View``;

// Element: Purchases
export const Purchases = styled.FlatList`
  background-color: #2c2c2c;
  padding: 16px;
`;

// Element: Search
export const Search = styled.TextInput`
  color: #dbdbdb;
  flex: 1;
  padding: 8px 16px;
`;

// Element: SearchContainer
export const SearchContainer = styled.View`
  align-items: center;
  background-color: #3d3d3d;
  border-radius: 6px;
  flex-direction: row;
  padding: 0 8px;
  margin: 16px 0;
`;

// Element: StatusBar
export const StatusBar = styled.StatusBar``;

// Element: TransactionsHeader
export const TransactionsHeader = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

// Element: Welcome
export const Welcome = styled.View`
  flex: 1;
  padding: 0 16px;
`;
