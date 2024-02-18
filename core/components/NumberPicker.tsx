import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import PlusButton from './PlusButton';
import MinusButton from './MinusButton';
import { colors } from '../../styles/constants';
import { useDispatch, useSelector } from 'react-redux';
import membersCounter, {
  decrement,
  increment,
} from '../../store/slices/membersCounter';
import { RootState } from '../../store/store';

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
      <Text style={{ color: colors.textColor }}>{number}</Text>
      <PlusButton onPress={incrementNumber} />
    </View>
  );
};

export default NumberPicker;
