import React from 'react';
import { Text, View, TouchableOpacity, Image, FlatList } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import routes from '../../constants/routes';
import events from './events';
import placeholderImg from '../../assets/images/robot-dev.png';

class EventsScreen extends React.Component {
  static navigationOptions = {
    title: 'EVENTS',
    headerRight: <View />
  };

  constructor(props) {
    super(props);

    this.state = {
      view: 'list'
    };
  }

  handleSwithViewOnPress = () => {
    // TODO: Add animation while swithching the view for beter UX
    this.setState(prevState => ({
      view: prevState.view === 'list' ? 'grid' : 'list'
    }));
  };

  handleEventCardOnPress = event => {
    const {
      navigation: { navigate, getParam }
    } = this.props;
    // TODO: handle null username or case where the user
    // came here somehow without a username
    const username = getParam('username', '');
    const eventsByUsernames = getParam('eventsByUsernames', {});
    navigate(routes.EVENT_DETAILS, { event, username, eventsByUsernames });
  };

  keyExtractor = item => `${item.name}`;

  renderListItemRow = ({ item }) => {
    const { name, type, location } = item;
    return (
      <TouchableOpacity
        onPress={() => this.handleEventCardOnPress(item)}
        style={styles.listCard}
      >
        <View style={[styles.cardContainer, styles.listSeparator]}>
          <Image source={placeholderImg} style={styles.placeholderImg} />
          <Text style={[styles.cardLabel]}>{name}</Text>
          <Text style={[styles.cardLabel]}>{location}</Text>
          <Text style={[styles.cardLabel]}>{type}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  renderGridItemRow = ({ item }) => {
    const { name, type, location } = item;

    return (
      <TouchableOpacity
        onPress={() => this.handleEventCardOnPress(item)}
        style={[styles.listCard, styles.gridCard]}
      >
        <View
          style={[
            styles.cardContainer,
            styles.gridCardContainer,
            styles.gridSeparator
          ]}
        >
          <Image
            source={placeholderImg}
            style={[styles.placeholderImg, styles.placeholderImgGrid]}
          />
          <Text style={[styles.cardLabel, styles.cardLabelGrid]}>{name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    const { view } = this.state;

    let switchViewLabel = 'List View';
    let numOfColumns = 2;
    let renderItem = this.renderGridItemRow;

    if (view === 'list') {
      numOfColumns = 1;
      switchViewLabel = 'GridView';
      renderItem = this.renderListItemRow;
    }

    return (
      <View style={[styles.container]}>
        <View style={styles.body}>
          <TouchableOpacity onPress={this.handleSwithViewOnPress}>
            <Text>{`Switch to ${switchViewLabel}`}</Text>
          </TouchableOpacity>
          <FlatList
            key={view} // doing this as we cant change the number of columns on fly
            data={events}
            keyExtractor={this.keyExtractor}
            renderItem={renderItem}
            numColumns={numOfColumns}
          />
        </View>
      </View>
    );
  }
}

export default EventsScreen;
