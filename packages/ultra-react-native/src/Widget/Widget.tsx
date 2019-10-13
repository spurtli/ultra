import React, {PropsWithChildren} from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import {Text} from 'react-native';

import styled from '../styled-components';

const StyledView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

type WidgetProps = {};
type Props = PropsWithChildren<WidgetProps>;

export function Widget({children}: Props) {
  return (
    <StyledView>
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={{padding: 15, alignItems: 'center', borderRadius: 5}}
      >
        <Text>Test 3</Text>
      </LinearGradient>
    </StyledView>
  );
}
