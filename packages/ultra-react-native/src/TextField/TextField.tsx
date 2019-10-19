import React, {PropsWithChildren} from 'react';
import {TextInputProps} from 'react-native';

import {Label} from '../Label';
import {TextInput} from '../TextInput';

type TextFieldProps = {
  label: string;
  value: string;
  autoCompleteType: TextInputProps['autoCompleteType'];
  clearMode?: 'while-editing';
  placeholder?: string;
  secureTextEntry?: boolean;
  onChange?(value: string): void;
};
type Props = PropsWithChildren<TextFieldProps>;

export function TextField({
  label,
  value,
  autoCompleteType = 'off',
  clearMode = 'while-editing',
  placeholder = '',
  secureTextEntry = false,
  onChange = () => {}
}: Props) {
  return (
    <>
      {label && <Label>{label}</Label>}
      <TextInput
        accessibilityLabel={label}
        value={value}
        autoCompleteType={autoCompleteType}
        clearButtonMode={clearMode}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        onChangeText={onChange}
      />
    </>
  );
}
