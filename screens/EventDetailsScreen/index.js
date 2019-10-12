import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';

import styles from './styles';
import placeholderImg from '../../assets/images/robot-dev.png';
import storage from '../../utils/storage';
import routes from '../../constants/routes';

class EventDetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Event Details',
    headerRight: <View />
  };

  handleTrackButtonOnPress = async (
    id,
    username,
    userEvents,
    eventsByUsernames
  ) => {
    const {
      navigation: { navigate }
    } = this.props;
    userEvents.push(id);
    await storage.set('getEventIdsByUsernames', eventsByUsernames);
    navigate(routes.EVENTS, { username, eventsByUsernames });
  };

  renderEventDetails = () => {
    const {
      navigation: { getParam }
    } = this.props;
    // TODO: handle default event in case user came here without a event
    const { name, location, type } = getParam('event', {});

    return (
      <View style={styles.eventDetailsContainer}>
        <Image source={placeholderImg} />
        <Text style={[styles.cardLabel]}>{name}</Text>
        <Text style={[styles.cardLabel]}>{location}</Text>
        <Text style={[styles.cardLabel]}>{type}</Text>
      </View>
    );
  };

  renderTrackEventButton = () => {
    const {
      navigation: { getParam }
    } = this.props;
    const username = getParam('username', '');
    const { id } = getParam('event', {});
    const eventsByUsernames = getParam('eventsByUsernames', {});
    let userEvents = eventsByUsernames[username];

    const buttonLabel = userEvents.includes(id)
      ? 'Tracking Event'
      : 'Track Event';

    return (
      <TouchableOpacity
        onPress={() =>
          this.handleTrackButtonOnPress(
            id,
            username,
            userEvents,
            eventsByUsernames
          )
        }
        style={styles.trackbutton}
        disabled={userEvents.includes(id)}
      >
        <Text style={styles.trackbuttonLabel}>{buttonLabel}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.body}>{this.renderEventDetails()}</ScrollView>
        {this.renderTrackEventButton()}
      </View>
    );
  }
}

export default EventDetailsScreen;
