import React, { PropsWithChildren } from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../../styles/constants';

interface Props {
  label: string;
  iconLeft: any;
  iconRight: any;
  color?: string;
}

const SectionButton = ({
  label,
  iconLeft,
  iconRight,
  color,
}: PropsWithChildren<Props>) => {
  return (
    <Pressable style={styles.button}>
      <View style={{ flexDirection: 'row' }}>
        <Ionicons name={iconLeft} size={24} color={colors.textColor} />
        <Text style={[styles.label, { color: color }]}>{label}</Text>
      </View>
      <View style={styles.iconContainer}>
        <Ionicons name={iconRight} size={24} color={colors.textColor} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginTop: 20,
    borderRadius: 8,
    justifyContent: 'space-between',
  },
  iconContainer: {
    marginRight: 8,
  },
  label: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 'normal',
    marginLeft: 10,
  },
});

export default SectionButton;
