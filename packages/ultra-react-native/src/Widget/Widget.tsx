import React, {PropsWithChildren} from 'react';
import ColorUtil from 'color';
import {LinearGradient} from 'expo-linear-gradient';

import styled from '../styled-components';
import {Color} from '../theme';

const Container = styled.View`
  flex: 1;
  margin-bottom: 32px;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

interface HeadingProps {
  color: string;
}
const Heading = styled.Text<HeadingProps>`
  color: ${({color}) => color};
  font-weight: bold;
  font-size: 20px;
`;

const Box = styled.View`
  border-width: 0;
  margin-top: 12px;
  shadow-opacity: 0.7;
  shadow-radius: 5px;
  shadow-color: #000;
  shadow-offset: 0px 0px;
`;

const Gradient = styled(LinearGradient)`
  flex: 1;
  border-radius: 16;
`;

const Children = styled.View`
  background-color: black;
  flex: 1 1;
  margin: 1px;
  padding: 16px;
  border-radius: 16;
`;

type WidgetProps = {
  color: Color;
};
type Props = PropsWithChildren<WidgetProps>;

export function Widget({children, color}: Props) {
  return (
    <Container>
      <Header>
        <Heading color={color}>Steps</Heading>
      </Header>
      <Box>
        <Gradient
          colors={[
            color,
            ColorUtil(color)
              .darken(0.3)
              .hex()
          ]}
        >
          <Children>{children}</Children>
        </Gradient>
      </Box>
    </Container>
  );
}
