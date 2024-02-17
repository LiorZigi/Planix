import Animated, {
  FadeInLeft,
  FadeInRight,
  FadeInUp,
} from 'react-native-reanimated';
import Card from '../../../core/components/Card';
import { StyleSheet, Text, View } from 'react-native';
import { colors, globalStyles } from '../../../styles/constants';
import { Octicons } from '@expo/vector-icons';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

interface EventsProps {
  navigation: BottomTabNavigationProp<any>;
}

const Events = ({ navigation }: EventsProps) => {
  const handleBarbicuePress = () => {
    navigation.navigate('Barbicue');
  };
  const handleBirthdayPress = () => {
    navigation.navigate('Birthday');
  };
  const handleCustomPress = () => {
    navigation.navigate('Custom');
  };
  return (
    <View style={styles.container}>
      <Animated.View entering={FadeInRight.delay(200).duration(100)}>
        <Card
          style={styles.cardContainer}
          pressable={true}
          onPress={handleBarbicuePress}
        >
          <Text style={styles.eventEmojis}>🥩</Text>
          <Text style={styles.text}>Barbicue</Text>
        </Card>
      </Animated.View>
      <Animated.View entering={FadeInLeft.delay(500).duration(100)}>
        <Card
          style={styles.cardContainer}
          pressable={true}
          onPress={handleBirthdayPress}
        >
          <Text style={styles.eventEmojis}>🎉</Text>
          <Text style={styles.text}>Birthday</Text>
        </Card>
      </Animated.View>
      <Animated.View entering={FadeInUp.delay(800).duration(100)}>
        <Card
          style={styles.cardContainer}
          pressable={true}
          onPress={handleCustomPress}
        >
          <Octicons name="plus" size={60} color={colors.textColor} />
          <Text style={styles.text}>Custom</Text>
        </Card>
      </Animated.View>
    </View>
  );
};

export default Events;

const styles = StyleSheet.create({
  container: {
    ...globalStyles.container,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'flex-start',
    gap: 20,
    marginTop: 70,
  },
  text: {
    ...globalStyles.text,
  },
  eventEmojis: {
    fontSize: 60,
  },
  cardContainer: {
    height: 170,
    width: 150,
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
