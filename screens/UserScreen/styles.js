import { StyleSheet } from 'react-native';

import * as theme from '../../styles/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color_bg
  },
  container__login: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  primaryCard: {
    flex: 1,
    backgroundColor: theme.color_bg_card,
    alignSelf: 'stretch',
    flexDirection: 'column',
    padding: theme.gutter_width_big,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    height: 50,
    width: 200
  },
  well: {
    margin: 2 * theme.gutter_width_huge
  },
  form: {
    flexDirection: 'column',
    alignSelf: 'stretch'
  },
  formGroup: {
    flexDirection: 'column',
    marginBottom: theme.gutter_width_huge
  },
  formLabel: {
    color: theme.color_black,
    fontSize: theme.font_size_medium,
    fontWeight: theme.font_wt_base,
    letterSpacing: theme.ltr_spc_small,
    textAlign: 'center'
  },
  formInput: {
    borderRadius: theme.border_radius_rounded_small,
    borderWidth: 1,
    borderColor: theme.color_lightBlueGrey,
    padding: theme.gutter_width_base,
    color: theme.color_black,
    fontSize: theme.font_size_medium,
    fontWeight: theme.font_wt_base
  },
  btn: {
    borderRadius: theme.border_radius_rounded_huge
  },
  btn_primary: {
    backgroundColor: theme.color_alpha
  },
  btn_huge: {
    padding: theme.gutter_width_big
  },
  btn_primary_text: {
    color: theme.color_white,
    textAlign: 'center',
    fontSize: theme.font_size_medium,
    fontWeight: theme.font_wt_max
  },
  link_primary: {
    textAlign: 'center',
    color: theme.color_greyBlue,
    fontSize: theme.font_size_base,
    fontWeight: theme.font_wt_min
  },
  secondaryCard: {
    alignSelf: 'stretch',
    flexDirection: 'column',
    padding: theme.gutter_width_huge,
    alignItems: 'center'
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  socialButton: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center'
  },
  socialButton_iconContainer: {
    backgroundColor: theme.color_white,
    padding: theme.gutter_width_small,
    borderRadius: theme.border_radius_circle,
    borderWidth: 1,
    borderColor: theme.color_paleLightGrey
  },
  socialButton_icon: {
    height: 25,
    width: 25
  },
  socialButton_text: {
    color: theme.color_txt_pale,
    fontSize: theme.font_size_micro,
    marginTop: theme.gutter_width_tiny
  },
  floatingLabel: {
    fontSize: theme.font_size_micro,
    color: theme.color_lightBlueGrey,
    marginLeft: theme.gutter_width_base,
    paddingLeft: theme.gutter_width_tiny,
    paddingRight: theme.gutter_width_tiny,
    bottom: -7,
    zIndex: 2,
    alignSelf: 'flex-start',
    display: 'none'
  },
  floatingLabel__active: {
    display: 'flex'
  },
  bg_white: {
    backgroundColor: theme.color_white
  }
});
