import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../styles/constants';
import { selectTheme } from '../../store/selectors/themeSelectors';
import { useSelector } from 'react-redux';

export default function DiscoverScreen() {
  const theme = useSelector(selectTheme);

  return (
    <View style={[styles.container, { backgroundColor: theme.bottomBackgroundColor }]}>
      <Text style={[styles.text, { color: theme.textColor }]}>Discover Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: globalStyles.container,
  text: globalStyles.text,
});
