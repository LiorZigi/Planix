import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { globalStyles } from '../../styles/constants';
import SectionButton from './components/SectionButton';
import BackgroundGradient from '../../styles/GradientBackground';
import { getAuth, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { clearUser } from '../../store/slices/userSlice';
import { RootState, userState } from '../../store/store';
import { extractNameFromEmail } from '../../core/utils/extractEmail';
import { PlanixRoutes, PlanixScreenProps } from '../../core/@planix/types';
import OuterCard from '../../core/components/atoms/OuterCard';
import { selectTheme } from '../../store/selectors/themeSelectors';
import { auth } from '../../firebase';
import { selectUser } from '../../store/selectors/userSelectors';

export default function ProfileScreen({ navigation }: PlanixScreenProps<PlanixRoutes.Profile>) {
  const theme = useSelector(selectTheme);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handlePress = (): void => {
    navigation.navigate(PlanixRoutes.Account);
  }

  const handleLogout = (): void => {
    signOut(auth)
      .then(() => {
        console.log('Signed out');
        dispatch(clearUser());
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <BackgroundGradient
      topColor={theme.topBackgroundColor}
      bottomColor={theme.bottomBackgroundColor}
    >
      <ScrollView style={globalStyles.container}>
        <View>
          <Text style={[styles.title, { color: theme.textColor }]}>
            Hi{' '}
            {!user?.displayName
              ? extractNameFromEmail(user?.email)
              : user?.displayName}
            !
          </Text>
        </View>
        <View style={styles.avatarSection}>
          <Pressable style={[styles.avatarContainer, { backgroundColor: theme.textColor }]}>
            <Image
              style={styles.avatar}
              source={require('../../assets/avatar.jpg')}
            />
          </Pressable>
          <Text style={[styles.username, { color: theme.textColor }]}>
            {!user?.displayName
              ? extractNameFromEmail(user?.email)
              : user?.displayName}
          </Text>
        </View>

        <OuterCard style={[styles.buttonSection, { backgroundColor: theme.outerCardColor }]}>
          <Text style={[styles.sections, { color: theme.textColor }]}>Settings</Text>
          <SectionButton
            label="Account"
            iconLeft="settings"
            iconRight="chevronRight"
            color={theme.textColor}
            iconLeftSize={30}
            iconRightSize={36}
            onPress={handlePress}
          />
          <Text style={[styles.sections, { color: theme.textColor }]}>Account</Text>
          <SectionButton
            label="Payment methods"
            iconLeft="creditCard"
            iconRight="chevronRight"
            color={theme.textColor}
            iconLeftSize={30}
            iconRightSize={36}
          ></SectionButton>
          <SectionButton
            label="Logout"
            iconLeft="logout"
            iconRight="chevronRight"
            color={theme.textColor}
            iconLeftSize={30}
            iconRightSize={36}
            onPress={handleLogout}
          ></SectionButton>
        </OuterCard>
      </ScrollView>
    </BackgroundGradient>
  );
}

const styles = StyleSheet.create({
  container: globalStyles.container,
  title: {
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
    marginTop: 20,
    padding: 16,
  },
  avatarContainer: {
    width: 70,
    height: 70,
    borderRadius: 50,
    overflow: 'hidden',
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  sections: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 20,
  },
  tasksStatus: {
    flexDirection: 'row',
    gap: 10,
  },
});
