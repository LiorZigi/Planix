import { Image, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../styles/constants';
import { globalStyles } from '../../styles/constants';
import BackgroundGradient from '../../styles/GradientBackground';
import PlxButton from '../../core/components/atoms/PlxButton';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { useDynamicColors } from '../../styles/useDynamicColors';

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
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require('../../assets/Planix.png')}
            style={styles.headerLogo}
          />
        </View>
        <View style={{ gap: 10 }}>
          <Text style={styles.headerTitle}>Let's get Planix!</Text>
          <Text style={globalStyles.text}>
            Please choose how you want to continue setting up your account.
          </Text>
        </View>
        <View>
          <Image
            source={require('../../assets/gathering.png')}
            style={styles.gatheringImage}
          />
        </View>
        <View style={styles.footer}>
          <View style={styles.buttonContainer}>
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
          </View>
        </View>
      </View>
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
  },
  headerTitle: {
    color: useDynamicColors().textColor,
    fontSize: 35,
    fontWeight: 'bold',
    letterSpacing: 4,
  },
  gatheringImage: {
    width: 350,
    height: 350,

    alignSelf: 'center',
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 150,
  },
  buttonContainer: {
    width: '100%',
    gap: 8,
  },
});
