/**
 * Using existing self written reusable component
 */

import React, { Component } from 'react';
import { TextInput, Text, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
// import { default_placeholder_text, color_txt_light } from '../../../styles/theme';

export default class PlainTextInpput extends Component {
  static propTypes = {
    /**
     * name of the field, onChange would be called with the field name and
     * the value at that point time, this will prevent you from using
     * inline/bind functions :)
     */
    field: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    placeholder: PropTypes.string,
    validationErrMsg: PropTypes.string, // pass this to renderError message in case of validation issue
    type: PropTypes.oneOf(['numeric', 'default', 'email-address', 'url']),
    multiline: PropTypes.bool,
    numberOfLines: PropTypes.number,
    containerStyles: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    shouldRenderClearInput: PropTypes.bool,

    onChange: PropTypes.func,
    refCallback: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onClearInput: PropTypes.func
  };

  static defaultProps = {
    value: '',
    placeholder: '',
    validationErrMsg: '',
    type: 'default',
    multiline: false,
    numberOfLines: 1,
    containerStyles: {},
    shouldRenderClearInput: false,
    refCallback: () => {},
    onFocus: () => {},
    onBlur: () => {},
    onChange: () => {},
    onClearInput: () => {}
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.value !== prevState.value) {
      return {
        value: nextProps.value
      };
    }
    return null;
  }

  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
    this.state = {
      value: props.value
    };
  }

  componentDidMount() {
    const { refCallback, field } = this.props;

    // use this if you want to force updates changes from parent
    if (refCallback && typeof refCallback === 'function') {
      refCallback(field, this.inputRef);
    }
  }

  onFocus = () => {
    const { onFocus, field } = this.props;

    if (onFocus && typeof onFocus === 'function') {
      onFocus(field);
    }
  };

  onBlur = () => {
    const { onBlur, field } = this.props;

    if (onBlur && typeof onBlur === 'function') {
      onBlur(field);
    }
  };

  onChange = value => {
    const { onChange, field } = this.props;

    if (onChange && typeof onChange === 'function') {
      onChange(field, value);
    }

    this.setState({
      value
    });
  };

  renderErrorMessage = () => {
    const { validationErrMsg } = this.props;

    if (!validationErrMsg) {
      return undefined;
    }

    // TODO: change the inline styles once UI
    return (
      <View>
        <Text style={{ color: 'red' }}>{validationErrMsg}</Text>
      </View>
    );
  };

  render() {
    const {
      placeholder,
      type,
      multiline,
      numberOfLines,
      containerStyles,
      validationErrMsg,
      shouldRenderClearInput,
      ...otherProps
    } = this.props;
    const { value } = this.state;
    const errorStyles = validationErrMsg.trim() ? styles.errorStyles : null;

    return (
      <View>
        <TextInput
          {...otherProps}
          multiline={multiline}
          numberOfLines={numberOfLines}
          keyboardType={type}
          placeholder={placeholder}
          // placeholderTextColor={default_placeholder_text}
          style={[styles.textInput, containerStyles, errorStyles]}
          ref={this.inputRef}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          value={value}
          onChangeText={this.onChange}
        />
        {this.renderErrorMessage()}
      </View>
    );
  }
}
