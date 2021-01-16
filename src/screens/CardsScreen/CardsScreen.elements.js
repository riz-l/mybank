// Import: Dependencies
import styled from "styled-components/native";

// Element: CardActions
export const CardActions = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
`;

// Element: CardContainer
export const CardContainer = styled.View`
  background-color: #292929;
  border-radius: 8px;
  margin-bottom: 16px;
  padding: 16px;
`;

// Element: CardDetails
export const CardDetails = styled.View`
  align-items: flex-end;
  flex: 1;
`;

// Element: CardInfo
export const CardInfo = styled.View`
  align-items: center;
  border-bottom-color: #393939;
  border-bottom-width: 1px;
  flex-direction: row;
  margin-bottom: 12px;
  padding-bottom: 12px;
`;

// Element: CardLogo
export const CardLogo = styled.Image`
  height: 40px;
  width: 40px;
`;

// Element: CardLogoContainer
export const CardLogoContainer = styled.View`
  align-items: center;
  background-color: ${(props) => props.bgColor};
  border-radius: 32px;
  height: 64px;
  justify-content: center;
  width: 64px;
`;

// Element: Cards
export const Cards = styled.FlatList`
  padding: 0 8px;
  margin-top: 32px;
`;

// Element: Container
export const Container = styled.SafeAreaView`
  background-color: #1e1e1e;
  flex: 1;
`;

// Element: Remove
export const Remove = styled.TouchableOpacity`
  margin-right: 32px;
`;

// Element: StatusBar
export const StatusBar = styled.StatusBar``;

// Element: Update
export const Update = styled.TouchableOpacity`
  background-color: #3d3d3d;
  border-radius: 6px;
  padding: 8px 16px;
`;
