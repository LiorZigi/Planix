import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from 'react-native';
import { globalStyles } from '../../../styles/constants';
import PlxButton from '../../../core/components/atoms/PlxButton';
import Input from '../../../core/components/atoms/Input';
import PlanixIcon from '../../../core/icons/PlanixIcon';
import { useDynamicColors } from '../../../styles/useDynamicColors';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

interface SignupScreenProps {
  navigation: any;
}

const SignupScreen = ({ navigation }: SignupScreenProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const auth = getAuth();

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('User created:', user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
      });
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
          source={require('../../../assets/Planix.png')}
        />
        <Text style={styles.text}>Create an account to get started</Text>
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
          <Input
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry={true}
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
          />
        </View>
      </View>
      <KeyboardAvoidingView
        style={styles.buttonContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}
      >
        <PlxButton title="Signup" pill={true} onPress={handleSignUp} style={styles.button} />
      </KeyboardAvoidingView>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    ...globalStyles.container,
    backgroundColor: useDynamicColors().topBackgroundColor,
    justifyContent: 'flex-start',
  },
  close: {
    position: 'absolute',
    top: 60,
    left: 40,
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: 80,
  },
  image: {
    width: 200,
    height: 70,
    marginVertical: 20,
  },
  text: {
    color: useDynamicColors().textColor,
    fontSize: 18,
    marginBottom: 20,
  },
  inputContainer: {
    alignSelf: 'stretch',
    padding: 10,
    gap: 5,
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
    color: useDynamicColors().primaryColor,
    fontSize: 16,
    marginTop: 10,
  },
  buttonContainer: {
    paddingHorizontal: 10,
  },
  button: {
    width: '100%',
    alignItems: 'center',
    alignSelf: 'center',
  }
});
