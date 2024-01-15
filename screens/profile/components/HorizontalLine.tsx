import { View, StyleSheet } from 'react-native';
import { colors } from '../../../styles/constants';

export default function HorizontalLine() {
  return (
    <View
      style={{
        marginVertical: 20,
        borderBottomColor: colors.primaryColor,
        borderBottomWidth: StyleSheet.hairlineWidth,
      }}
    />
  );
}
