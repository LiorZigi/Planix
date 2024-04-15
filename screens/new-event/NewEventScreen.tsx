import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { colors, globalStyles, window } from '../../styles/constants';
import BackgroundGradient from '../../styles/GradientBackground';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import Carousel from 'react-native-reanimated-carousel';
import EventCard from '../../core/components/atoms/EventCard';
import { useDynamicColors } from '../../styles/useDynamicColors';

interface NewEventScreenProps {
  navigation: BottomTabNavigationProp<any>;
}

export default function NewEventScreen({ navigation }: NewEventScreenProps) {
  const PAGE_WIDTH = window.width;

  return (
    <BackgroundGradient
      topColor={useDynamicColors().topBackgroundColor}
      bottomColor={useDynamicColors().bottomBackgroundColor}
    >
      <View style={globalStyles.container}>
        <Image
          style={styles.logo}
          source={require('../../assets/Planix.png')}
        ></Image>

        <Text style={styles.text}>
          Choose the kind of event you'd like to create
        </Text>
        <Carousel
          loop
          width={PAGE_WIDTH}
          height={500}
          autoPlay={false}
          data={[...new Array(5).keys()]}
          scrollAnimationDuration={1000}
          renderItem={({ index }) => (
            <View style={styles.eventsContainer}>
              <EventCard
                style={styles.cardContainer}
                index={index}
                navigation={navigation}
              ></EventCard>
            </View>
          )}
        />
      </View>
    </BackgroundGradient>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 60,
    width: 180,
    alignSelf: 'center',
    position: 'absolute',
  },
  text: {
    ...globalStyles.text,
    color: useDynamicColors().textColor,
    marginTop: 80,
  },
  eventsContainer: {
    ...globalStyles.container,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    height: 300,
    width: 250,
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
