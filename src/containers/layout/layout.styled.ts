import styled, { css } from "styled-components/native";
import { Layout } from "@ui-kitten/components";

export const StyledLayout = styled(Layout)<{
  fullHeight: boolean;
}>`
  ${({ theme, fullHeight }) => css`
    ${fullHeight && "flex: 1"};
    padding-top: ${theme.spacing.space[6]};
    padding-left: ${theme.spacing.space[4]};
    padding-right: ${theme.spacing.space[4]};
  `}
`;
