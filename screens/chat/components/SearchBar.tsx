import { View, StyleSheet } from 'react-native';
import { useState } from 'react';
import Input from '../../../core/components/atoms/Input';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../../store/selectors/themeSelectors';

export default function SearchBar() {
  const theme = useSelector(selectTheme);
  const [search, setSearch] = useState<string>('');

  return (
    <View style={[styles.container, { backgroundColor: theme.topBackgroundColor }]}>
      <Input
        value={search}
        style={[styles.input, { color: theme.textColor, borderColor: theme.inputBorderColor, backgroundColor: theme.inputBackgroundColor }]}
        placeholder="Search"
        onChangeText={setSearch}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    borderRadius: 10,
    paddingLeft: 10,
  },
});
