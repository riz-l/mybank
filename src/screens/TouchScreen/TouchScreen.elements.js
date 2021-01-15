// Import: Dependencies
import styled from "styled-components/native";

// Element: Circle
export const Circle = styled.View`
  background-color: ${(props) => props.bgColor};
  border-radius: 999px;
  padding: 32px;
`;

// Element: Container
export const Container = styled.SafeAreaView`
  background-color: #1e1e1e;
  flex: 1;
`;

// Element: PinAccess
export const PinAccess = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-top: 16px;
  padding: 16px;
`;

// Element: StatusBar
export const StatusBar = styled.StatusBar``;

// Element: Touch
export const Touch = styled.TouchableOpacity`
  align-items: center;
  flex: 1;
  justify-content: center;
`;

// Element: TouchButton
export const TouchButton = styled.View`
  background-color: #5196f4;
  border-radius: 100px;
  padding: 8px;
`;
