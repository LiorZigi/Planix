import { Image, StyleSheet, Text, View } from 'react-native';
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

interface FirstOnboardingProps {
  navigation: any;
}

export default function FirstOnboarding({ navigation }: FirstOnboardingProps) {
  const handlePress = () => {
    navigation.navigate('SecondOnboarding');
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
        <Text style={styles.title}>Boost your order</Text>
      </Animated.View>
      <Animated.View
        style={styles.imageContainer}
        entering={FadeInDown.delay(400).duration(800)}
        exiting={FadeOutDown.duration(800)}
      >
        <Image
          source={require('../../assets/FamilyTable.png')}
          style={styles.image}
        ></Image>
      </Animated.View>
      <Animated.View
        entering={FadeInLeft.delay(800).duration(800)}
        exiting={FadeOutLeft.duration(800)}
        style={styles.button}
      >
        <PlxButton title="Next" onPress={handlePress} />
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
    height: 350,
    width: 350,
  },
  button: {
    width: '80%',
    alignSelf: 'center',
  },
});
