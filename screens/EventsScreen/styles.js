import { StyleSheet } from 'react-native';

import * as theme from '../../styles/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color_bg
  },
	body: {
		marginHorizontal: theme.gutter_width_small,
	},
  listCard: {
    flex: 1,
  },
  cardContainer: {
		flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: theme.gutter_width_tiny * 3,
    paddingVertical: theme.gutter_width_small * 5,
		backgroundColor: theme.color_white,
		borderRadius: 4,
  },
  placeholderImg: {
    width: 20,
    height: 20,
    borderRadius: 10
  },
  placeholderImgGrid: {
    width: '100%',
    height: '100%'
  },
  cardLabelGrid: {
    position: 'absolute',
    top: '50%'
  },
	listSeparator: {
		marginVertical: theme.gutter_width_small,
	},
	gridSeparator: {
		marginVertical: theme.gutter_width_small,
		marginHorizontal: theme.gutter_width_small,
	}
});
