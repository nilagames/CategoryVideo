import React, { Component } from 'react';
import { StatusBar, Platform } from 'react-native';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components/native';
import { GoogleAnalyticsTracker } from 'react-native-google-analytics-bridge';

import Navigator from './Navigator';
import { FloatingAction } from './components';
import { colors } from './utils/constants';
import { AppoDealInit, AppoDealShow, getCurrentRouteName } from './utils';
import Orientation from 'react-native-orientation';

import config from '../config';

const tracker = new GoogleAnalyticsTracker(config.GACode);

const Root = styled.View`
  flex: 1;
  backgroundColor: ${props => props.theme.body};
`;

const StatusBarAndroid = styled.View`
  height: 24;
  backgroundColor: ${props => props.theme.StatusBar};
`;

class App extends Component {
  componentWillMount() {
    AppoDealInit();
  }

  componentDidMount() {
    Orientation.lockToPortrait();
  }

  render() {
    AppoDealShow("Home");
    tracker.trackScreenView('Home');
    return (
      <ThemeProvider theme={colors}>
        <Root>
          <StatusBar barStyle={'light-content'} backgroundColor={'transparent'} translucent />
          { Platform.OS === 'android' && Platform.Version >= 20 ? <StatusBarAndroid /> : null }
          <Navigator
            onNavigationStateChange={(prevState, currentState) => {
              const currentScreen = getCurrentRouteName(currentState);
              const prevScreen = getCurrentRouteName(prevState);
              if (prevScreen !== currentScreen) {
                AppoDealShow(currentScreen);
                tracker.trackScreenView(currentScreen);
              }
            }}
          />
        </Root>
      </ThemeProvider>
    );
  }
}

export default App;
