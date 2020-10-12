import styled, { css } from 'styled-components';

export const Container = styled.main`
  ${({ theme }) => css`
    height: 100vh;
    padding-top: ${theme.spacings.xsmall};
  `}
`;
