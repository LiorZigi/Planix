import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { globalStyles } from '../../../styles/constants';
import PlxButton from '../../../core/components/atoms/PlxButton';
import Input from '../../../core/components/atoms/Input';
import PlanixIcon from '../../../core/icons/PlanixIcon';
import { useEffect, useState } from 'react';
import { useDynamicColors } from '../../../styles/useDynamicColors';
import {
  getAuth,
  signInWithEmailAndPassword,
  User,
  UserCredential,
} from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store/store';
import { fetchUser, setUser } from '../../../store/slices/userSlice';

interface EmailModalProps {
  navigation: any;
}

const EmailModal = ({ navigation }: EmailModalProps) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { user, status } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUser());
    }
    if (user) {
      navigation.navigate('Profile');
    }
  }, [status, user, dispatch, navigation]);

  const handleSignInWithEmailAndPassword = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential: UserCredential) => {
        const user: User = userCredential.user;
        dispatch(setUser(user));
        navigation.navigate('Profile');
        navigation.goBack();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
      });
  };

  const handleSignUp = () => {
    navigation.goBack();
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.close} onPress={() => navigation.goBack()}>
        <PlanixIcon
          iconName="close"
          size={32}
          color={useDynamicColors().primaryColor}
        />
      </Pressable>
      <View style={styles.headerContainer}>
        <Image
          style={styles.image}
          source={require('../../../assets/login.png')}
        />
        <Text style={styles.text}>
          Log in easily with your Email and Password!
        </Text>
        <View style={styles.inputContainer}>
          <Input
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Input
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <Pressable onPress={handleSignUp}>
          <Text style={styles.signupLink}>Not a user yet? Sign up!</Text>
        </Pressable>
      </View>
      <KeyboardAvoidingView
        style={styles.button}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}
      >
        <PlxButton
          title="Log in"
          pill={true}
          onPress={handleSignInWithEmailAndPassword}
        />
      </KeyboardAvoidingView>
    </View>
  );
};

export default EmailModal;

const styles = StyleSheet.create({
  container: {
    ...globalStyles.container,
    backgroundColor: useDynamicColors().topBackgroundColor,
    justifyContent: 'flex-end',
    paddingVertical: 55,
  },
  close: {
    position: 'absolute',
    zIndex: 1,
    top: 80,
    right: 40,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 80,
  },
  image: {
    width: 150,
    height: 150,
  },
  text: {
    ...globalStyles.text,
    fontSize: 30,
    fontWeight: 'bold',
  },
  inputContainer: {
    alignSelf: 'stretch',
    padding: 10,
    marginTop: 30,
    gap: 10,
  },
  input: {
    height: 50,
    fontSize: 20,
    color: useDynamicColors().textColor,
    borderColor: useDynamicColors().inputBorderColor,
    backgroundColor: useDynamicColors().inputBackgroundColor,
    paddingHorizontal: 20,
  },
  signupLink: {
    fontSize: 18,
    color: useDynamicColors().primaryColor,
  },
  button: {
    marginTop: 'auto',
  },
});
