import { Platform, View } from 'react-native';
import PlanixIcon from '../../icons/PlanixIcon';
import { useDynamicColors } from '../../../styles/useDynamicColors';

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
      <PlanixIcon
        iconName={icon}
        size={32}
        color={
          focused
            ? useDynamicColors().primaryColor
            : useDynamicColors().textColor
        }
      />
    </View>
  );
}
