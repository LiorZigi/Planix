import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { colors, globalStyles } from '../../../styles/constants';
import Input from '../../../core/components/atoms/Input';
import { useState } from 'react';
import Checkbox from '../../../core/components/atoms/CheckBox';
import NumberPicker from '../../../core/components/molecules/NumberPicker';
import ExpansionPanel from '../atoms/ExpansionPanel';
import PlxButton from '../atoms/PlxButton';
import { useDynamicColors } from '../../../styles/useDynamicColors';

interface NewEventModalProps {
  data: Array<{
    column1: string | number;
    column2: string | number;
  }>;
}

const NewEventModal = ({ data }: NewEventModalProps) => {
  const [value, setValue] = useState<string>('');
  const [checked, setChecked] = useState<boolean>(false);

  const handleCheckboxPress = (): void => {
    setChecked(!checked);
  };

  const handleInputChanged = (text: string): void => {
    setValue(text);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 120 : 0}
    >
      <View>
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
        <View style={styles.panelContainer}>
          <ExpansionPanel title="Essentials" content="List goes here" />
        </View>
      </View>

      <View style={{ marginBottom: 30 }}>
        <PlxButton title="Create Group" onPress={() => {}} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default NewEventModal;

const styles = StyleSheet.create({
  container: {
    ...globalStyles.container,
    backgroundColor: useDynamicColors().bottomBackgroundColor,
    justifyContent: 'space-between',
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
  panelContainer: {
    paddingHorizontal: 16,
  },
  createButton: {
    // flex: 1,
    // marginBottom: 30,
  },
});
