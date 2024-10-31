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
  eventName: string;
  eventEmoji?: string;
  index?: number;
}

const EventCard = ({ style, navigation, eventName, eventEmoji, index }: EventCardProps) => {

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
    borderRadius: 18,
    padding: 16,
      alignItems: 'center',
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
    fontSize: 20,
  },
  eventEmojis: {
    fontSize: 50,
  },
});

export default EventCard;
