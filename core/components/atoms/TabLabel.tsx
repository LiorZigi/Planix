import { Text, View } from 'react-native';
import { colors } from '../../../styles/constants';

interface TabLabelProps {
  label?: string;
}

export default function TabLabel({ label }: TabLabelProps) {
  return (
    <View
      style={{
        top: 20,
      }}
    >
      <Text style={{ color: colors.textColor, fontSize: 12 }}>{label}</Text>
    </View>
  );
}
