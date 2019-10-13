import styled from '../styled-components';
import {Color} from '../theme';

export const TextField = styled.TextInput`
  color: ${({theme}): Color => theme.colors.textColor};
  font-size: 20;
  height: 40;
  border-bottom-color: ${({theme}): Color => theme.colors.tint1};
  border-bottom-width: 1;
  margin-bottom: 16;
`;
