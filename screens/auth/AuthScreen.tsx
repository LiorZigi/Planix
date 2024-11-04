import { Image, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../styles/constants';
import { globalStyles } from '../../styles/constants';
import BackgroundGradient from '../../styles/GradientBackground';
import PlxButton from '../../core/components/atoms/PlxButton';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { useDynamicColors } from '../../styles/useDynamicColors';
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInLeft,
} from 'react-native-reanimated';

interface AuthScreenProps {
  navigation: BottomTabNavigationProp<any>;
}

export default function AuthScreen({ navigation }: AuthScreenProps) {
  const handlePress = (route: string): void => {
    navigation.navigate(route);
  };

  return (
    <BackgroundGradient
      topColor={useDynamicColors().topBackgroundColor}
      bottomColor={useDynamicColors().bottomBackgroundColor}
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
          <Text style={styles.headerTitle}>Let's get Planix!</Text>
          <Text style={[globalStyles.text, { textAlign: 'center' }]}>
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
              onPress={() => {}}
              color={'#fff'}
              textColor="#000"
            />
            <PlxButton
              title="Continue with Apple"
              onPress={() => {}}
              color={'#fff'}
              textColor="#000"
            />
            <PlxButton
              title="Continue with Email"
              color={useDynamicColors().primaryColor}
              onPress={handlePress.bind(null, 'Email')}
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
    color: useDynamicColors().textColor,
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
});
