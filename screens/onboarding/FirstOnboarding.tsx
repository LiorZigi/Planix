import { Image, StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../styles/constants';
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
import { useSelector } from 'react-redux';
import { selectTheme } from '../../store/selectors/themeSelectors';

export default function FirstOnboarding({ navigation }: PlanixScreenProps<PlanixRoutes.FirstOnboarding>) {
  const theme = useSelector(selectTheme);

  const handlePress = () => {
    navigation.navigate(PlanixRoutes.SecondOnboarding);
  };

  return (
    <Animated.View style={[styles.container, { backgroundColor: theme.bottomBackgroundColor }]}>
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
        <Text style={[styles.title, { color: theme.textColor }]}>Boost your order</Text>
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
      >
        <PlxButton title="Next" onPress={handlePress} textColor={theme.buttonTextColor} style={styles.button} />
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
    alignItems: 'center',
    alignSelf: 'center',
  },
});
