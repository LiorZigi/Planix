import React from 'react';
import * as Haptic from 'expo-haptics';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { globalStyles, window } from '../../styles/constants';
import BackgroundGradient from '../../styles/GradientBackground';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import EventCard from '../../core/components/atoms/EventCard';
import { useDynamicColors } from '../../styles/useDynamicColors';

interface NewEventScreenProps {
  navigation: BottomTabNavigationProp<any>;
}

interface Event {
  name: string;
  emoji?: string;
}

export default function NewEventScreen({ navigation }: NewEventScreenProps) {
  const events: Event[] = [
    {
      name: 'Barbecue',
      emoji: '🥩',
    },
    {
      name: 'Picnic',
      emoji: '🍉',
    },
    {
      name: 'Camping',
      emoji: '🏕️',
    },
    {
      name: 'Birthday',
      emoji: '🎉',
    },
    {
      name: 'Custom',
    },
  ];

  return (
    <BackgroundGradient
      topColor={useDynamicColors().topBackgroundColor}
      bottomColor={useDynamicColors().bottomBackgroundColor}
    >
      <ScrollView style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../../assets/Planix.png')}
        ></Image>

        <Text style={styles.text}>
          Choose the kind of event you'd like to create
        </Text>
        <View style={styles.eventsContainer}>
          {events.map((event, index) => (
            <EventCard
              key={index}
              index={index}
              navigation={navigation}
              eventName={event.name}
              eventEmoji={event.emoji}
              style={styles.cardContainer}
            />
          ))}
        </View>
      </ScrollView>
    </BackgroundGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    ...globalStyles.container,
    marginTop: 40,
  },
  logo: {
    height: 35,
    width: 130,
    alignSelf: 'center',
    marginBottom: 20,
  },
  text: {
    ...globalStyles.text,
    color: useDynamicColors().textColor,
  },
  eventsContainer: {
    ...globalStyles.container,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
    flexWrap: 'wrap',
    marginTop: 10,
  },
  cardContainer: {
    height: 180,
    width: 140,
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: useDynamicColors().borderColor,
  },
});
