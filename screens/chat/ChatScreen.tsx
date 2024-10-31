import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../styles/constants';
import SearchBar from './components/SearchBar';

export default function ChatScreen() {
  return (
    <View style={styles.container}>
      <SearchBar></SearchBar>
      <View style={styles.textContainer}>
        <Text style={styles.text}>No active chats</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: globalStyles.container,
  textContainer: {
    ...globalStyles.container,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    ...globalStyles.text,
    fontSize: 30,
  },
});
