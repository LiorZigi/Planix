import { Image, StyleSheet, Text } from 'react-native';
import { globalStyles } from '../../styles/constants';
import { useDynamicColors } from '../../styles/useDynamicColors';
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInLeft,
  FadeInRight,
  FadeOut,
  FadeOutDown,
  FadeOutLeft,
} from 'react-native-reanimated';
import PlxButton from '../../core/components/atoms/PlxButton';
import { PlanixRoutes, PlanixScreenProps } from '../../core/@planix/types';

interface SecondOnboardingProps {
  navigation: any;
}

export default function SecondOnboarding({
  navigation,
}: PlanixScreenProps<PlanixRoutes.SecondOnboarding>) {
  const handlePress = () => {
    navigation.navigate(PlanixRoutes.AuthStack);
  };

  return (
    <Animated.View style={styles.container}>
      <Animated.View
        entering={FadeInLeft.duration(800)}
        exiting={FadeOutLeft.duration(800)}
        style={styles.titleContainer}
      >
        <Animated.View
          entering={FadeIn.duration(800)}
          exiting={FadeOut.duration(800)}
        >
          <Image
            source={require('../../assets/Planix.png')}
            style={{ height: 40, width: 100, alignSelf: 'center' }}
          />
        </Animated.View>
        <Text style={styles.title}>All your plans, in one place</Text>
      </Animated.View>
      <Animated.View
        style={styles.imageContainer}
        entering={FadeInDown.delay(400).duration(800)}
        exiting={FadeOutDown.duration(800)}
      >
        <Image
          source={require('../../assets/HappyFriends.png')}
          style={styles.image}
        ></Image>
      </Animated.View>
      <Animated.View
        entering={FadeInLeft.delay(800).duration(800)}
        exiting={FadeOutLeft.duration(800)}
      >
        <PlxButton title="Next" onPress={handlePress} style={styles.button} />
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...globalStyles.container,
    justifyContent: 'space-around',
  },
  titleContainer: {
    alignSelf: 'center',
    gap: 30,
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: useDynamicColors().textColor,
  },
  imageContainer: {
    alignSelf: 'center',
  },
  planix: {
    alignSelf: 'center',
  },
  image: {
    height: 250,
    width: 400,
  },
  button: {
    width: '80%',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
