import React from 'react';
import { View, StyleSheet, Pressable, Platform } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { colors } from '../../../styles/constants';
import { useDynamicColors } from '../../../styles/useDynamicColors';

interface MinusButtonProps {
  onPress: () => void;
}

const MinusButton = ({ onPress }: MinusButtonProps) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View style={styles.circle}>
        <Octicons
          name="dash"
          size={Platform.OS === 'ios' ? 20 : 20}
          color={useDynamicColors().buttonTextColor}
          style={{ opacity: 1, fontWeight: 'bold' }}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 20,
    backgroundColor: useDynamicColors().primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MinusButton;
