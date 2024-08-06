import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../styles/constants';

export default function FavoritesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Favorites Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: globalStyles.container,
  text: globalStyles.text,
});
