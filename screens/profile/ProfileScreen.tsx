import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors, globalStyles } from '../../styles/constants';
import HorizontalLine from './components/HorizontalLine';
import SectionButton from './components/SectionButton';
import BackgroundGradient from '../../styles/GradientBackground';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function ProfileScreen() {
  return (
    <BackgroundGradient
      topColor={colors.topBackgroundColor}
      bottomColor={colors.bottomBackgroundColor}
    >
      <Animated.ScrollView
        entering={FadeInDown.duration(500)}
        style={globalStyles.container}
      >
        <View>
          <Text style={styles.title}>Hi Lior!</Text>
        </View>
        <View style={styles.avatarSection}>
          <Pressable style={styles.avatarContainer}></Pressable>
          <Text style={styles.username}>Lior Zigi</Text>
        </View>

        <View style={styles.buttonSection}>
          <Text style={styles.sections}>Settings</Text>
          <SectionButton
            label="Settings"
            iconLeft="settings"
            iconRight="chevron-forward"
            color={colors.textColor}
          />
          <Text style={styles.sections}>Account</Text>
          <SectionButton
            label="Payment methods"
            iconLeft="card"
            iconRight="chevron-forward"
            color={colors.textColor}
          ></SectionButton>
          <SectionButton
            label="Manage subscription"
            iconLeft="barcode"
            iconRight="chevron-forward"
            color={colors.textColor}
          ></SectionButton>
          <SectionButton
            label="Logout"
            iconLeft="log-out"
            iconRight="chevron-forward"
            color={colors.textColor}
          ></SectionButton>
        </View>
      </Animated.ScrollView>
    </BackgroundGradient>
  );
}

const styles = StyleSheet.create({
  container: globalStyles.container,
  title: {
    color: colors.textColor,
    fontSize: 30,
    fontWeight: '900',
    marginBottom: 30,
  },
  avatarSection: {
    flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'row',
    gap: 15,
  },
  buttonSection: {
    flex: 2,
  },
  avatarContainer: {
    width: 70,
    height: 70,
    borderRadius: 50,
    overflow: 'hidden',
    backgroundColor: colors.textColor,
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.textColor,
    alignSelf: 'center',
  },
  sections: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 20,
    color: colors.textColor,
  },
  tasksStatus: {
    flexDirection: 'row',
    gap: 10,
  },
});
