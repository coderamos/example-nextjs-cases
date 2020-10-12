import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { HeadingProps } from '.';

export const Container = styled.h2<HeadingProps>`
  ${({ theme, color }) => css`
    color: ${theme.colors[color!]};

    ${media.greaterThan('medium')``};
  `}
`;
