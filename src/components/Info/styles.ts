import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    border-radius: ${theme.border.radius};
    border: 1px solid ${theme.colors.primary};
    color: ${theme.colors.white};
    margin: 0 0 ${theme.spacings.xxsmall} 0;
    padding: ${theme.spacings.xxsmall};
  `}
`;

export const Title = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.light};
    display: flex;
    flex-direction: column;
    font-style: italic;
    strong {
      font-style: normal;
    }
  `}
`;

export const InfoItem = styled.div`
  ${({ theme }) => css`
    display: flex;
  `}
`;

export const Description = styled.span`
  ${({ theme }) => css``}
  width: 50%;
`;

export const Value = styled.strong`
  ${({ theme }) => css`
    text-align: left;
  `}
`;
