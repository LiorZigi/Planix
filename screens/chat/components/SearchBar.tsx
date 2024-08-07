import { View, TextInput, StyleSheet } from 'react-native';
import { globalStyles } from '../../../styles/constants';
import { useDynamicColors } from '../../../styles/useDynamicColors';
import { useState } from 'react';
import Input from '../../../core/components/atoms/Input';

export default function SearchBar() {
  const dynamicColors = useDynamicColors();
  const [search, setSearch] = useState<string>('');

  return (
    <View style={styles.container}>
      <Input
        value={search}
        style={styles.input}
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
    backgroundColor: useDynamicColors().topBackgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: useDynamicColors().inputBackgroundColor,
    borderRadius: 10,
    paddingLeft: 10,
    color: useDynamicColors().textColor,
  },
});
