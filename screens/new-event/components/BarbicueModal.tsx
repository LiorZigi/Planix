import { StyleSheet, Text, View } from 'react-native';
import { colors, globalStyles } from '../../../styles/constants';
import Input from '../../../core/components/Input';
import { useState } from 'react';

const BarbicueModal = () => {
  const [value, setValue] = useState('');

  const handleInputChanged = (text: string) => {
    setValue(text);
  };

  return (
    <View style={styles.container}>
      <Input value={value} onChangeText={handleInputChanged} />
      <Input value={value} onChangeText={handleInputChanged} />
    </View>
  );
};

export default BarbicueModal;

const styles = StyleSheet.create({
  container: {
    ...globalStyles.container,
    backgroundColor: colors.bottomBackgroundColor,
  },
});
