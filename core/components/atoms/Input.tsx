import React, { useState } from 'react';
import { TextInput, StyleSheet, Keyboard } from 'react-native';
import { useDynamicColors } from '../../../styles/useDynamicColors';

interface InputProps {
  value: string | number;
  onChangeText?: (text: string) => void;
  autoFocus?: boolean;
  placeholder?: string;
  keyboardType?: 'default' | 'numeric' | 'email-address' | 'phone-pad';
  caretHidden?: boolean;
  secureTextEntry?: boolean;
  textAlign?: 'left' | 'right' | 'center';
  style?: object;
}

const Input = ({
  value,
  onChangeText,
  autoFocus = false,
  placeholder,
  keyboardType = 'default',
  caretHidden = false,
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
    Keyboard.dismiss();
  };

  return (
    <TextInput
      placeholderTextColor={useDynamicColors().textInfoColor}
      autoFocus={autoFocus}
      value={value.toString()}
      onChangeText={onChangeText}
      placeholder={placeholder}
      keyboardType={keyboardType}
      caretHidden={caretHidden}
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
    color: useDynamicColors().textColor,
    fontSize: 18,
    // borderColor: useDynamicColors().inputBorderColor,
    backgroundColor: useDynamicColors().inputBackgroundColor,
    // borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  focused: {
    // borderColor: 'blue',
  },
});

export default Input;
