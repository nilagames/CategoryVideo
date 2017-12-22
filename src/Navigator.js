import React from 'react';
import { Platform } from 'react-native';
import {
  TabNavigator,
  StackNavigator,
} from 'react-navigation';
import { default as FontAwesome } from 'react-native-vector-icons/FontAwesome';
import { default as Ionicons } from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/Home';
import FavoritesScreen from './screens/Favorites';
import VideoScreen from './screens/Video';
import { CategoryIcon, BackIcon } from './components/icons';
import { colors } from './utils/constants';

const Routes = {
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'HOME',
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="home" size={23} color={tintColor} />
      ),
      header: null,
    })
  },
  Favorites: {
    screen: FavoritesScreen,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'CURATOR PICK',
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="heartbeat" size={23} color={tintColor} />
      ),
      header: null,
    })
  },
};

const AppMainTab = TabNavigator(Routes, {
  tabBarOptions: {
    activeTintColor: colors.WHITE,
    inactiveTintColor: colors.inactiveTintColor,
    inactiveBackgroundColor: colors.tabBG,
    activeBackgroundColor: colors.tabBG,
    showIcon: Platform.OS === 'ios',
    showLabel: true,
    indicatorStyle: {
      backgroundColor: colors.WHITE,
      height: 3,
    },
    labelStyle: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    style: {
      backgroundColor: colors.tabBG,
    },
    upperCaseLabel: true,
  },
  tabBarPosition: Platform.OS === 'ios' ? 'bottom' : 'top',
  swipeEnabled: true,
  animationEnabled: true,
});

const AppMainStack = StackNavigator({
  Home: { screen: AppMainTab },
  Video: {
    screen: VideoScreen,
    navigationOptions: ({ navigation }) => ({
      header: null,
    })
  },
  CategoryVideos: {
    screen: FavoritesScreen,
    navigationOptions: ({ navigation }) => ({
      drawerLabel: `${ navigation.state.params.item.name }`,
      drawerIcon: ({ tintColor }) => (
        <Ionicons name="md-videocam" size={23} color={tintColor} />
      ),
      headerStyle: {
        backgroundColor: colors.headerStyle,
      },
      headerTitle: `${ navigation.state.params.item.name }`,
      headerTitleStyle: {
        color: colors.WHITE,
      },
      headerLeft: <BackIcon onPress={() => navigation.goBack()} />,
    }),
  },
}, {
  cardStyle: {
    backgroundColor: colors.cardBG,
  },
  mode: 'modal',
});

const Navigator = TabNavigator({
  Main: { screen: AppMainStack },
}, {
  navigationOptions: {
    tabBarVisible: false,
  },
  swipeEnabled: false,
});

export default Navigator;
