import * as theme from './theme';

export const headerStyle = {
  backgroundColor: theme.color_bg,
  padding: theme.gutter_width_medium,
  flexDirection: 'row',
};

export const headerTitleStyle = {
  flex: 1,
  fontSize: theme.font_size_medium,
  textAlign: 'center',
};

export const headerIconRightContainerStyle = { marginRight: 10, width: 24, height: 24 };
export const headerIconRightStyle = { color: 'white', width: 24, height: 24 };

export const headerIconLeftContainerStyle = { marginLeft: 10, width: 24, height: 24 };
export const headerIconLeftStyle = { color: 'white', width: 24, height: 24 };
