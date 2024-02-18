import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { colors } from '../../styles/constants';

interface InputProps {
  value: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  keyboardType?: 'default' | 'numeric' | 'email-address' | 'phone-pad';
  secureTextEntry?: boolean;
  textAlign?: 'left' | 'right' | 'center';
  style?: object;
}

const Input = ({
  value,
  onChangeText,
  placeholder,
  keyboardType = 'default',
  secureTextEntry = false,
  textAlign,
  style,
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      textAlign={textAlign}
      onFocus={handleFocus}
      onBlur={handleBlur}
      style={[styles.input, isFocused && styles.focused, style]}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    color: colors.textColor,
    borderColor: colors.inputBorderColor,
    backgroundColor: colors.inputBackgroundColor,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  focused: {
    // borderColor: 'blue',
  },
});

export default Input;
