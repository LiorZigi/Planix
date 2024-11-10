import React from 'react';
import { View, StyleSheet, Pressable, Platform } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { useDynamicColors } from '../../../styles/useDynamicColors';

interface PlusButtonProps {
  onPress: () => void;
}

const PlusButton = ({ onPress }: PlusButtonProps) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View style={styles.circle}>
        <Octicons
          name="plus"
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

export default PlusButton;
