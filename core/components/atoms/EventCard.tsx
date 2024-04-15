import React from 'react';
import { StyleSheet, Pressable, Text, View } from 'react-native';
import BackgroundGradient from '../../../styles/GradientBackground';
import { colors } from '../../../styles/constants';
import { globalStyles } from '../../../styles/constants';
import { Octicons } from '@expo/vector-icons';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { useDynamicColors } from '../../../styles/useDynamicColors';

interface EventCardProps {
  style?: object | object[];
  navigation: BottomTabNavigationProp<any>;
  onPress?: () => void;
  index?: number;
}

const EventCard = ({ style, navigation, index }: EventCardProps) => {
  let eventName = '';
  let eventEmoji = '';

  switch (index) {
    case 0:
      eventName = 'Barbecue';
      eventEmoji = '🥩';
      break;
    case 1:
      eventName = 'Picnic';
      eventEmoji = '🍉';
      break;
    case 2:
      eventName = 'Camping';
      eventEmoji = '🏕️';
      break;
    case 3:
      eventName = 'Birthday';
      eventEmoji = '🎉';
      break;
    default:
      eventName = 'Custom';
      break;
  }

  const handlePress = (route: string): void => {
    navigation.navigate(route);
  };

  return (
    <Pressable onPress={handlePress.bind(null, eventName)}>
      <BackgroundGradient
        topColor={useDynamicColors().cardTopColor}
        bottomColor={useDynamicColors().cardBottomColor}
        style={[styles.card, style]}
      >
        {eventName === 'Custom' ? (
          <Octicons
            name="plus"
            size={100}
            color={useDynamicColors().textColor}
          />
        ) : null}
        <Text style={styles.eventEmojis}>{eventEmoji}</Text>
        <Text style={styles.cardText}>{eventName}</Text>
      </BackgroundGradient>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 32,
    padding: 16,
  },
  cardShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  cardText: {
    ...globalStyles.text,
    fontSize: 24,
  },
  eventEmojis: {
    fontSize: 100,
  },
});

export default EventCard;
