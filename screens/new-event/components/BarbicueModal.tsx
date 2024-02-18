import { StyleSheet, Text, View } from 'react-native';
import { colors, globalStyles } from '../../../styles/constants';
import Input from '../../../core/components/Input';
import { useState } from 'react';
import Checkbox from '../../../core/components/CheckBox';
import NumberPicker from '../../../core/components/NumberPicker';

const BarbicueModal = () => {
  const [value, setValue] = useState<string>('');
  const [checked, setChecked] = useState<boolean>(false);

  const handleCheckboxPress = (): void => {
    setChecked(!checked);
  };

  const handleInputChanged = (text: string): void => {
    setValue(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.groupNameContainer}>
        <Text style={{ ...globalStyles.text, alignSelf: 'center' }}>
          Group Name
        </Text>

        <Input
          value={value}
          textAlign="center"
          onChangeText={handleInputChanged}
        />
      </View>
      <View style={styles.membersContainer}>
        <View style={styles.inputContainer}>
          <Text style={globalStyles.text}>Number of members</Text>
          <NumberPicker
            style={{ justifyContent: 'center' }}
            value={2}
            onValueChange={(value) => {}}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={globalStyles.text}>Notify members</Text>
          <Checkbox
            style={{ alignSelf: 'center' }}
            checked={checked}
            onPress={handleCheckboxPress}
          />
        </View>
      </View>
    </View>
  );
};

export default BarbicueModal;

const styles = StyleSheet.create({
  container: {
    ...globalStyles.container,
    backgroundColor: colors.bottomBackgroundColor,
  },
  groupNameContainer: {
    paddingHorizontal: 16,
    gap: 10,
  },
  membersContainer: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputContainer: {
    gap: 12,
  },
});
