import { StyleSheet } from 'react-native';

import * as theme from '../../styles/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color_bg
  },
  body: {
    flex: 1,
    marginHorizontal: theme.gutter_width_small
  },
  eventDetailsContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  trackbutton: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'stretch',
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: 100,
    paddingTop: theme.gutter_width_base,
    elevation: 30
  },
  trackbuttonLabel: {
    textAlign: 'center',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: theme.gutter_width_medium,
    backgroundColor: theme.color_robinSEgg
  }
});
