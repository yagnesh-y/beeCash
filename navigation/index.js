import { createAppContainer, createStackNavigator } from 'react-navigation';
import { View } from 'react-native';
import React from 'react';

import UserScreen from '../screens/UserScreen';
import EventsScreen from '../screens/EventsScreen/index';
import EventDetailsScreen from '../screens/EventDetailsScreen';

import routes from '../constants/routes';
import { headerStyle, headerTitleStyle } from '../styles/header-styles';

const AppStack = createStackNavigator(
  {
    [routes.USER]: UserScreen,
    [routes.EVENTS]: EventsScreen,
    [routes.EVENT_DETAILS]: EventDetailsScreen
  },
  {
    initialRouteName: routes.USER,
    defaultNavigationOptions: {
      headerStyle,
      headerTitleStyle
    }
  }
);

const App = createAppContainer(AppStack);

export default App;
