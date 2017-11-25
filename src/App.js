import React, { Component } from 'react';
import { StatusBar, Platform } from 'react-native';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components/native';

import Navigator from './Navigator';
import { FloatingAction } from './components';
import { colors } from './utils/constants';

const Root = styled.View`
  flex: 1;
  backgroundColor: ${props => props.theme.body};
`;

const StatusBarAndroid = styled.View`
  height: 24;
  backgroundColor: ${props => props.theme.StatusBar};
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={colors}>
        <Root>
          <StatusBar barStyle={'light-content'} backgroundColor={'transparent'} translucent />
          { Platform.OS === 'android' && Platform.Version >= 20 ? <StatusBarAndroid /> : null }
          <Navigator />
        </Root>
      </ThemeProvider>
    );
  }
}

export default App;
