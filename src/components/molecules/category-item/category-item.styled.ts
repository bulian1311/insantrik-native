import styled from "styled-components/native";
import { Icon } from "@ui-kitten/components";

export const StyledWrapper = styled.View`
  width: 70px;
  margin-right: 12px;
`;

export const StyledView = styled.View<{ borderColor?: string }>`
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  border-width: 2px;
  border-color: ${({ borderColor }) => borderColor};
  border-radius: 35px;
`;

export const StyledIcon = styled(Icon)`
  width: 40px;
  height: 40px;
`;
