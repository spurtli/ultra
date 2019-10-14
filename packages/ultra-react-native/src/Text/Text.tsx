import {PropsWithChildren} from 'react';

import styled from '../styled-components';

type TextProps = {
  variant: Variant;
};
type Props = PropsWithChildren<TextProps>;

export enum Variant {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Body
}

interface VariantMapping {
  [variant: string]: {
    fontSize: number;
    fontWeight: number;
  };
}

const variantMapping: VariantMapping = {
  [Variant.H1]: {
    fontSize: 36,
    fontWeight: 100
  },
  [Variant.H2]: {
    fontSize: 32,
    fontWeight: 700
  },
  [Variant.H3]: {
    fontSize: 28,
    fontWeight: 700
  },
  [Variant.H4]: {
    fontSize: 24,
    fontWeight: 700
  },
  [Variant.H5]: {
    fontSize: 18,
    fontWeight: 700
  },
  [Variant.H6]: {
    fontSize: 16,
    fontWeight: 700
  },
  [Variant.Body]: {
    fontSize: 16,
    fontWeight: 700
  }
};

export const Text = styled.Text<Props>`
  color: ${({theme}) => theme.colors.textColor};
  font-weight: ${({variant}) => variantMapping[variant].fontWeight};
  font-size: ${({variant}) => variantMapping[variant].fontSize};
`;

Text.defaultProps = {
  variant: Variant.Body
};
