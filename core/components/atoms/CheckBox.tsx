import React, { useState } from 'react';
import { View, Animated, Pressable, Vibration } from 'react-native';
import { colors } from '../../../styles/constants';
import * as Haptics from 'expo-haptics';

interface CheckboxProps {
  checked: boolean;
  onPress: () => void;
  style?: object;
}

const Checkbox = ({ checked, onPress, style }: CheckboxProps) => {
  const [scale] = useState(new Animated.Value(checked ? 1 : 0));

  const handlePress = () => {
    Animated.timing(scale, {
      toValue: checked ? 0 : 1,
      duration: 200,
      useNativeDriver: true,
    }).start();

    onPress();
  };

  return (
    <Pressable
      onPress={() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        handlePress();
      }}
    >
      <View
        style={{
          width: 24,
          height: 24,
          borderRadius: 12,
          borderWidth: 2,
          borderColor: colors.primaryColor,
          justifyContent: 'center',
          alignItems: 'center',
          ...style,
        }}
      >
        <Animated.View
          style={{
            width: 16,
            height: 16,
            borderRadius: 8,
            backgroundColor: colors.primaryColor,
            transform: [{ scale }],
          }}
        />
      </View>
    </Pressable>
  );
};

export default Checkbox;
