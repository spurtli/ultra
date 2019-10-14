import React, {PropsWithChildren} from 'react';

import {Label} from '../Label';
import {TextInput} from '../TextInput';

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
