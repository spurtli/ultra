import React, {PropsWithChildren} from 'react';

import styled from '../styled-components';

const Label = styled.Text`
  color: ${({theme}) => theme.colors.tintColor};
`;

const TextInput = styled.TextInput`
  color: ${({theme}) => theme.colors.textColor};
  font-size: 20;
  height: 40;
  border-bottom-color: ${({theme}) => theme.colors.tint1};
  border-bottom-width: 1;
  margin-bottom: 16;
`;

type TextFieldProps = {
  label: string;
  value: string;
  clearMode?: 'while-editing';
  placeholder?: string;
  onChange?(value: string): void;
};
type Props = PropsWithChildren<TextFieldProps>;

export function TextField({
  label,
  value,
  clearMode = 'while-editing',
  placeholder = '',
  onChange = () => {}
}: Props) {
  return (
    <>
      {label && <Label>{label}</Label>}
      <TextInput
        accessibilityLabel={label}
        value={value}
        placeholder={placeholder}
        clearButtonMode={clearMode}
        onChangeText={onChange}
      />
    </>
  );
}
