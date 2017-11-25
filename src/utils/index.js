import { Appodeal } from 'react-native-appodeal';
import config from '../../config';

export const AppoDealInit = () => {
  Appodeal.setTesting(true);
  Appodeal.setLogLevel(Appodeal.LogLevel.debug);

  Appodeal.setSmartBanners(true);
  Appodeal.setBannerAnimation(true);
  Appodeal.setTabletBanners(true);
  Appodeal.setBannerBackground(true);

  Appodeal.setAutoCache(Appodeal.BANNER, true);
  Appodeal.initialize(config.appodealKey, Appodeal.BANNER);
};

export const AppoDealShow = () => {
  Appodeal.show(Appodeal.BANNER, "initial_screen", (result) => console.log(result));
};

export const AppoDealHide = () => {
  Appodeal.isLoaded(Appodeal.BANNER, (isLoaded) => {
    if (isLoaded) {
      Appodeal.hide(Appodeal.BANNER);
    }
  });
};

// gets the current screen from navigation state
export const getCurrentRouteName = (navigationState) => {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  // dive into nested navigators
  if (route.routes) {
    return getCurrentRouteName(route);
  }
  return route.routeName;
};
