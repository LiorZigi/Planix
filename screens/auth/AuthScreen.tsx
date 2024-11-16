import { Image, StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../styles/constants';
import BackgroundGradient from '../../styles/GradientBackground';
import PlxButton from '../../core/components/atoms/PlxButton';
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInLeft,
} from 'react-native-reanimated';
import { PlanixRoutes, PlanixScreenProps } from '../../core/@planix/types';
import { selectTheme } from '../../store/selectors/themeSelectors';
import { useSelector } from 'react-redux';

export default function AuthScreen({ navigation }: PlanixScreenProps<PlanixRoutes.AuthScreen | PlanixRoutes.AuthStack>) {
  const theme = useSelector(selectTheme);

  const handlePress = (route: any): void => {
    navigation.navigate(route);
  };

  return (
    <BackgroundGradient
      topColor={theme.topBackgroundColor}
      bottomColor={theme.bottomBackgroundColor}
    >
      <Animated.View style={styles.container} entering={FadeIn}>
        <Animated.View style={styles.header} entering={FadeIn}>
          <Image
            source={require('../../assets/Planix.png')}
            style={styles.headerLogo}
          />
        </Animated.View>
        <Animated.View
          style={{ gap: 10 }}
          entering={FadeInLeft.duration(600).stiffness(3)}
        >
          <Text style={[styles.headerTitle, { color: theme.textColor }]}>Let's get Planix!</Text>
          <Text style={[globalStyles.text, { textAlign: 'center', color: theme.textColor }]}>
            Please choose how you want to continue setting up your account.
          </Text>
        </Animated.View>
        <Animated.View entering={FadeInDown.duration(600).delay(400)}>
          <Image
            source={require('../../assets/gathering.png')}
            style={styles.gatheringImage}
          />
        </Animated.View>
        <View style={styles.footer}>
          <Animated.View
            style={styles.buttonContainer}
            entering={FadeInDown.delay(800).duration(700)}
          >
            <PlxButton
              title="Continue with Google"
              onPress={() => { }}
              color={'#fff'}
              textColor="#000"
              style={styles.button}
            />
            <PlxButton
              title="Continue with Apple"
              onPress={() => { }}
              color={'#fff'}
              textColor="#000"
              style={styles.button}
            />
            <PlxButton
              title="Continue with Email"
              color={theme.primaryColor}
              onPress={handlePress.bind(null, PlanixRoutes.Email)}
              style={styles.button}
            />
          </Animated.View>
        </View>
      </Animated.View>
    </BackgroundGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    ...globalStyles.container,
    marginTop: 50,
  },
  header: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: 30,
  },
  headerLogo: {
    height: 40,
    width: 120,
    alignSelf: 'center',
  },
  headerTitle: {
    fontSize: 35,
    fontWeight: 'bold',
    letterSpacing: 4,
    textAlign: 'center',
  },
  gatheringImage: {
    width: 400,
    height: 400,

    alignSelf: 'center',
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  buttonContainer: {
    width: '100%',
    gap: 8,
  },
  button: {
    width: '100%',
    alignItems: 'center',
    alignSelf: 'center',
  }
});
