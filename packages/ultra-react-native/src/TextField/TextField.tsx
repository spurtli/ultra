import styled from '../../styled-components';

export const TextField = styled.TextInput`
  color: ${({theme}) => theme.colors.textColor};
  font-size: 20;
  height: 40;
  border-bottom-color: ${({theme}) => theme.colors.tint1};
  border-bottom-width: 1;
  margin-bottom: 16;
`;
