import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../styles/constants';
import SearchBar from './components/SearchBar';

export default function ChatScreen() {
  return (
    <View style={styles.container}>
      <SearchBar></SearchBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: globalStyles.container,
  text: globalStyles.text,
});
