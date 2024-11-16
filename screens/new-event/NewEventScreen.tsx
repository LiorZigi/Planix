import { Image, ScrollView, StyleSheet, Text } from 'react-native';
import { globalStyles } from '../../styles/constants';
import BackgroundGradient from '../../styles/GradientBackground';
import EventCard from '../../core/components/atoms/EventCard';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { useEffect, useState } from 'react';
import { useFetchEvents } from '../../core/hooks/useFetchEvents';
import { Event } from '../../models/Event';
import { PlanixScreenProps } from '../../core/@planix/types';
import OuterCard from '../../core/components/atoms/OuterCard';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../store/selectors/themeSelectors';

export default function NewEventScreen({ navigation }: PlanixScreenProps) {
  const theme = useSelector(selectTheme);
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const events = await useFetchEvents();
        setEvents(events);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    fetchEvents();
  }, []);

  return (
    <BackgroundGradient
      topColor={theme.topBackgroundColor}
      bottomColor={theme.bottomBackgroundColor}
    >
      <ScrollView style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../../assets/Planix.png')}
        ></Image>

        <Text style={[styles.text, { color: theme.textColor }]}>
          Choose the kind of event you'd like to create
        </Text>
        <Animated.View entering={FadeInDown} >
          <OuterCard style={[styles.eventsContainer, { backgroundColor: theme.cardTopColor }]}>
            {events.map((event, index) => (
              <EventCard
                key={index}
                index={index}
                navigation={navigation}
                eventName={event.name}
                eventEmoji={event.emoji}
                style={[styles.cardContainer, { borderColor: theme.borderColor }]}
              />
            ))}
          </OuterCard>
        </Animated.View>

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
  },
  eventsContainer: {
    ...globalStyles.container,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: 20,
    gap: 20,
    marginTop: 40,
  },
  cardContainer: {
    height: 150,
    width: 150,
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0,
  },
});
