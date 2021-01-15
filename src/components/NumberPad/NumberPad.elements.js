// Import: Dependencies
import styled from "styled-components/native";

// Element: Container
export const Container = styled.View`
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 372px;
  width: 100%;
`;

// Element: Keypad
export const KeyPad = styled.View`
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  margin: 0 30px;
  max-width: 400px;
`;

// Element: Number
export const Number = styled.TouchableOpacity`
  align-items: center;
  border-color: #ffffff20;
  border-radius: 32px;
  border-width: 1px;
  height: 64px;
  justify-content: center;
  margin: 10px 20px;
  width: 64px;
`;
