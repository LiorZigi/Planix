import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../styles/constants';

export default function ChatScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Chat Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: globalStyles.container,
  text: globalStyles.text,
});
