import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../styles/constants';

export default function FavoritesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Favorites list is empty</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {...globalStyles.container, alignItems: 'center'},
  text: {...globalStyles.text, fontSize: 30, marginTop: 80},
});
