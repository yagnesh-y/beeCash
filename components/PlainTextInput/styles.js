import { StyleSheet } from 'react-native';

import * as theme from '../../styles/theme';

export default StyleSheet.create({
  textInput: {},
  errorStyles: {
    borderColor: 'red',
    borderWidth: 0.8,
  },
  iconContainer: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -7 }], // move up the size of the icon(14) to center it exactly
    paddingHorizontal: theme.gutter_width_base,
  },
});
