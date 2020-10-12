import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    border-radius: ${theme.border.radius};
    border: 1px solid ${theme.colors.primary};
    color: ${theme.colors.white};
    margin: ${theme.spacings.xxsmall} 0;
    padding: ${theme.spacings.xxsmall};
  `}
`;

export const Title = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-style: italic;
    font-weight: ${theme.font.light};
  `}
`;

export const ApiLink = styled.strong``;
