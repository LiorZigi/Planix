import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { colors, globalStyles } from '../../styles/constants';
import BackgroundGradient from '../../styles/GradientBackground';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import Events from './components/Events';

interface NewEventScreenProps {
  navigation: BottomTabNavigationProp<any>;
}

export default function NewEventScreen({ navigation }: NewEventScreenProps) {
  return (
    <BackgroundGradient
      topColor={colors.topBackgroundColor}
      bottomColor={colors.bottomBackgroundColor}
    >
      <View style={globalStyles.container}>
        <Image
          style={styles.logo}
          source={require('../../assets/Planix.png')}
        ></Image>

        <Text style={styles.text}>Choose what kind of event</Text>
        <Events navigation={navigation} />
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
    color: colors.textColor,
    marginTop: 80,
  },
});
