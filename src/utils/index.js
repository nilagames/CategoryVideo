import { Appodeal } from 'react-native-appodeal';
import config from '../../config';

const adtype = Appodeal.BANNER;

export const AppoDealInit = () => {
  Appodeal.setAutoCache(adtype, true);

  Appodeal.setSmartBanners(true);
  Appodeal.setBannerAnimation(true);
  Appodeal.setTabletBanners(true);
  Appodeal.setBannerBackground(true);

  Appodeal.setTesting(true);
  Appodeal.setLogLevel(Appodeal.LogLevel.verbose);

  Appodeal.initialize(config.appodealKey, adtype);
};

export const AppoDealShow = (placement) => {
  if (placement) Appodeal.show(adtype, placement);
  Appodeal.show(adtype, "initial_screen");
};

export const AppoDealHide = () => {
  Appodeal.hide(adtype);
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
