import React from 'react';
import { StyleSheet, Pressable, Text } from 'react-native';
import BackgroundGradient from '../../../styles/GradientBackground';
import { globalStyles } from '../../../styles/constants';
import { Octicons } from '@expo/vector-icons';
import { useDynamicColors } from '../../../styles/useDynamicColors';
import { PlanixNavigationProp, PlanixRoutes } from '../../@planix/types';

interface EventCardProps {
  style?: object | object[];
  navigation: PlanixNavigationProp;
  onPress?: () => void;
  eventName: PlanixRoutes;
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
  const handlePress = (route: any): void => {
    navigation.navigate(route);
  };

  return (
    <Pressable
      onPress={handlePress.bind(null, eventName)}
      style={styles.cardShadow}
    >
      <BackgroundGradient
        topColor={useDynamicColors().cardTopColor}
        bottomColor={useDynamicColors().cardBottomColor}
        style={[styles.card, style]}
      >
        {eventName === PlanixRoutes.Custom ? (
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
    borderRadius: 16,
    padding: 16,
  },
  cardShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    // shadowOpacity: 0.4,
    // shadowRadius: 7,
    // elevation: 5,
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
