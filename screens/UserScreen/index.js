import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import TextInput from '../../components/PlainTextInput';

import styles from './styles';
import routes from '../../constants/routes';
import storage from '../../utils/storage';

class UserScreen extends React.Component {
  static navigationOptions = {
    title: 'USERNAME'
  };

  state = {
    username: ''
  };

  handleChange = (field, value) => {
    this.setState({
      [field]: value
    });
  };

  handleSubmitUser = async () => {
    const { username } = this.state;
    const {
      navigation: { navigate }
    } = this.props;

    const eventsByUsernames = await storage.get('getEventIdsByUsernames');
    if (!eventsByUsernames[username]) {
      eventsByUsernames[username] = [];
      await storage.set('getEventIdsByUsernames', eventsByUsernames);
    }

    navigate(routes.EVENTS, {
      username,
      eventsByUsernames
    });
  };

  renderTextInput = () => (
    <TextInput
      autoFocus
      returnKeyLabel="next"
      returnType={'next'}
      textContentType="none"
      field="username"
      onChange={this.handleChange}
      value={this.state.username}
      placeholder="Enter username"
      containerStyles={styles.formInput}
    />
  );

  renderSubmitUserButton = () => {
    const { username } = this.state;

    return (
      <TouchableOpacity onPress={this.handleSubmitUser}>
        <View style={[styles.btn, styles.btn_primary, styles.btn_huge]}>
          <Text style={styles.btn_primary_text}>SUBMIT USER</Text>
        </View>
      </TouchableOpacity>
    );
  };

  renderForm = () => (
    // TODO: take care of keyboard avoiding view
    <View style={styles.form}>
      <View style={styles.formGroup}>
        <Text
          style={[
            styles.floatingLabel,
            styles.bg_white,
            styles.floatingLabel__active
          ]}
        >
          User Name
        </Text>
        {this.renderTextInput()}
      </View>
      <View style={styles.formGroup}>{this.renderSubmitUserButton()}</View>
    </View>
  );

  render() {
    return (
      <View style={[styles.container, styles.container__login]}>
        <View style={styles.primaryCard}>{this.renderForm()}</View>
      </View>
    );
  }
}

export default UserScreen;
