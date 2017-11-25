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

  Appodeal.show(Appodeal.BANNER, "initial_screen", (result) => console.log(result));
};

export const AppoDealHide = () => {
  Appodeal.hide(Appodeal.BANNER);
};
