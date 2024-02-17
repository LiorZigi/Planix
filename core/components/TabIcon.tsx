import { Platform, View } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { colors } from '../../styles/constants';

interface TabIconProps {
  focused: boolean;
  icon: any;
}

export default function TabIcon({ focused, icon }: TabIconProps) {
  return (
    <View
      style={{
        position: 'absolute',
        top: Platform.OS === 'ios' ? 15 : 0,
      }}
    >
      <Octicons
        name={icon}
        color={focused ? colors.primaryColor : 'grey'}
        size={30}
      />
    </View>
  );
}
