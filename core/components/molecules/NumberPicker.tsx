import { View, StyleSheet } from 'react-native';
import PlusButton from '../atoms/PlusButton';
import MinusButton from '../atoms/MinusButton';
import Input from '../atoms/Input';
import { useDynamicColors } from '../../../styles/useDynamicColors';
import { useState } from 'react';

interface NumberPickerProps {
  value: number;
  onValueChange: (value: number) => void;
  style?: object;
}

const NumberPicker = ({ value, onValueChange, style }: NumberPickerProps) => {
  const [number, setNumber] = useState(value);

  const incrementNumber = () => {
    setNumber(number + 1);
  };

  const decrementNumber = () => {
    if (number === 0) return;
    setNumber(number - 1);
  };

  return (
    <View style={[styles.container, style]}>
      <MinusButton onPress={decrementNumber} />
      <Input
        value={number}
        keyboardType="numeric"
        caretHidden={true}
        style={styles.input}
        onChangeText={(text) => onValueChange(parseInt(text, 10))}
      ></Input>
      <PlusButton onPress={incrementNumber} />
    </View>
  );
};

export default NumberPicker;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  input: {
    color: useDynamicColors().textColor,
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
