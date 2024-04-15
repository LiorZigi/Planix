import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { colors, globalStyles } from '../../styles/constants';
import SectionButton from './components/SectionButton';
import BackgroundGradient from '../../styles/GradientBackground';
import { useDynamicColors } from '../../styles/useDynamicColors';

export default function ProfileScreen() {
  return (
    <BackgroundGradient
      topColor={useDynamicColors().topBackgroundColor}
      bottomColor={useDynamicColors().bottomBackgroundColor}
    >
      <ScrollView style={globalStyles.container}>
        <View>
          <Text style={styles.title}>Hi Lior!</Text>
        </View>
        <View style={styles.avatarSection}>
          <Pressable style={styles.avatarContainer}>
            <Image
              style={styles.avatar}
              source={require('../../assets/avatar.jpg')}
            />
          </Pressable>
          <Text style={styles.username}>Lior Zigi</Text>
        </View>

        <View style={styles.buttonSection}>
          <Text style={styles.sections}>Settings</Text>
          <SectionButton
            label="Account"
            iconLeft="settings"
            iconRight="chevronRight"
            color={useDynamicColors().textColor}
            iconLeftSize={30}
            iconRightSize={36}
          />
          <Text style={styles.sections}>Account</Text>
          <SectionButton
            label="Payment methods"
            iconLeft="creditCard"
            iconRight="chevronRight"
            color={useDynamicColors().textColor}
            iconLeftSize={30}
            iconRightSize={36}
          ></SectionButton>
          <SectionButton
            label="Logout"
            iconLeft="logout"
            iconRight="chevronRight"
            color={useDynamicColors().textColor}
            iconLeftSize={30}
            iconRightSize={36}
          ></SectionButton>
        </View>
      </ScrollView>
    </BackgroundGradient>
  );
}

const styles = StyleSheet.create({
  container: globalStyles.container,
  title: {
    color: useDynamicColors().textColor,
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
    backgroundColor: useDynamicColors().textColor,
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    color: useDynamicColors().textColor,
    alignSelf: 'center',
  },
  sections: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 20,
    color: useDynamicColors().textColor,
  },
  tasksStatus: {
    flexDirection: 'row',
    gap: 10,
  },
});
