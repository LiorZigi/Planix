import { Text, View } from 'react-native';
import { useDynamicColors } from '../../../styles/useDynamicColors';

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
      <Text style={{ color: useDynamicColors().textColor, fontSize: 12 }}>
        {label}
      </Text>
    </View>
  );
}
