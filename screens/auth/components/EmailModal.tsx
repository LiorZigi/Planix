import {
  Alert,
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
import { useState } from 'react';
import { useDynamicColors } from '../../../styles/useDynamicColors';
import { saveEmailToLocalStorage } from '../../../core/logic/storage';
import { actionCodeSettings } from '../../../firebase';
import { getAuth, sendSignInLinkToEmail } from 'firebase/auth';

interface EmailModalProps {
  navigation: any;
}

const EmailModal = ({ navigation }: EmailModalProps) => {
  const [email, setEmail] = useState<string>('');
  const auth = getAuth();

  const sendMagicLink = async () => {
    try {
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      Alert.alert(
        'Magic Link Sent!',
        'Check your email to complete the sign-in process.'
      );
      await saveEmailToLocalStorage(email); // Save the email locally for later verification
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to send magic link. Please try again.');
    }
  };

  const handleInputChanged = (text: string): void => {
    setEmail(text);
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
        <Text style={styles.text}>Log in easily without a password!</Text>
        <Text style={styles.info}>
          We'll send you an email with a magic link that'll log you in right
          away.
        </Text>
        <Input
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={handleInputChanged}
        />
      </View>
      <KeyboardAvoidingView
        style={styles.button}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}
      >
        <PlxButton
          title="Send magic link"
          pill={true}
          onPress={sendMagicLink}
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
    fontSize: 36,
    fontWeight: 'bold',
  },
  info: {
    ...globalStyles.text,
    marginTop: 20,
  },
  input: {
    height: 50,
    fontSize: 20,
    color: useDynamicColors().textColor,
    alignSelf: 'stretch',
    borderColor: useDynamicColors().inputBorderColor,
    backgroundColor: useDynamicColors().inputBackgroundColor,
    padding: 10,
    paddingHorizontal: 20,
    marginTop: 40,
  },
  button: {
    marginTop: 'auto',
  },
});
