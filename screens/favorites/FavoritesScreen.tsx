import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../styles/constants';
import { selectTheme } from '../../store/selectors/themeSelectors';
import { useSelector } from 'react-redux';
import { PlanixScreenProps } from '../../core/@planix/types';

export default function FavoritesScreen({ navigation }: PlanixScreenProps) {
  const theme = useSelector(selectTheme);

  return (
    <View style={[styles.container, { backgroundColor: theme.bottomBackgroundColor }]}>
      <Text style={[styles.text, { color: theme.textColor }]}>Favorites list is empty</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { ...globalStyles.container, alignItems: 'center' },
  text: { ...globalStyles.text, fontSize: 30, marginTop: 80 },
});
