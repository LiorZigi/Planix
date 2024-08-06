import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../styles/constants';

export default function DiscoverScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Discover Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: globalStyles.container,
  text: globalStyles.text,
});
