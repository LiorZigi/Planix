import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import PlusButton from '../atoms/PlusButton';
import MinusButton from '../atoms/MinusButton';
import { colors } from '../../../styles/constants';
import { useDispatch, useSelector } from 'react-redux';
import membersCounter, {
  decrement,
  increment,
} from '../../../store/slices/membersCounter';
import { RootState } from '../../../store/store';
import Input from '../atoms/Input';

interface NumberPickerProps {
  value: number;
  onValueChange: (value: number) => void;
  style?: object;
}

const NumberPicker = ({ value, onValueChange, style }: NumberPickerProps) => {
  const dispatch = useDispatch();
  const number = useSelector((state: RootState) => state.membersCounter.value);

  const incrementNumber = () => {
    dispatch(increment());
  };

  const decrementNumber = () => {
    dispatch(decrement());
  };

  return (
    <View style={[{ flexDirection: 'row' }, style]}>
      <MinusButton onPress={decrementNumber} />
      <Input value={number} style={{ color: colors.textColor }}></Input>
      <PlusButton onPress={incrementNumber} />
    </View>
  );
};

export default NumberPicker;
