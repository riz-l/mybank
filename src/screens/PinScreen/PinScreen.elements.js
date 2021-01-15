// Import: Dependencies
import styled from "styled-components/native";

// Element: AccessPin
export const AccessPin = styled.View`
  flex-direction: row;
  justify-content: space-between;
  /* margin: 32px 64px 16px 64px; */
  margin: 32px auto 16px auto;
  max-width: 400px;
`;

// Element: Container
export const Container = styled.SafeAreaView`
  background-color: #1e1e1e;
  flex: 1;
`;

// Element: Pin
export const Pin = styled.View`
  background-color: #5196f4;
  border-radius: 4px;
  height: 8px;
  width: 8px;
`;

// Element: PinContainer
export const PinContainer = styled.View`
  align-items: center;
  border-color: #5196f4;
  border-radius: 8px;
  border-width: 1px;
  height: 16px;
  justify-content: center;
  margin: 0 20px;
  width: 16px;
`;

// Element: StatusBar
export const StatusBar = styled.StatusBar``;

// Element: UseTouch
export const UseTouch = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin: 32px 0 64px 0;
`;
