import React from 'react';
import { StyleSheet, Pressable, Text } from 'react-native';
import BackgroundGradient from '../../../styles/GradientBackground';
import { globalStyles } from '../../../styles/constants';
import { Octicons } from '@expo/vector-icons';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { useDynamicColors } from '../../../styles/useDynamicColors';

interface EventCardProps {
  style?: object | object[];
  navigation: BottomTabNavigationProp<any>;
  onPress?: () => void;
  eventName: string;
  eventEmoji?: string;
  index?: number;
}

const EventCard = ({
  style,
  navigation,
  eventName,
  eventEmoji,
  index,
}: EventCardProps) => {
  const handlePress = (route: string): void => {
    navigation.navigate(route);
  };

  return (
    <Pressable
      onPress={handlePress.bind(null, eventName)}
      style={styles.cardShadow}
    >
      <BackgroundGradient
        topColor={useDynamicColors().inputBackgroundColor}
        bottomColor={useDynamicColors().inputBackgroundColor}
        style={[styles.card, style]}
      >
        {eventName === 'Custom' ? (
          <Octicons
            name="plus"
            size={50}
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
    borderRadius: 20,
    padding: 16,
  },
  cardShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.4,
    shadowRadius: 7,
    elevation: 5,
  },
  cardText: {
    ...globalStyles.text,
    fontSize: 20,
    textAlign: 'center',
  },
  eventEmojis: {
    fontSize: 50,
  },
});

export default EventCard;
