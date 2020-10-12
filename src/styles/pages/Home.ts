import styled, { css } from 'styled-components';

export const Container = styled.main`
  ${() => css`
    height: 100vh;
  `}
`;

export const ProductsWrapper = styled.section``;

export const ProductsList = styled.ul``;

export const Product = styled.li`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    list-style: none;
  `}
`;
