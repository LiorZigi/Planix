import { StyleSheet } from 'react-native';
import { PlanixRoutes, PlanixScreenProps } from '../../core/@planix/types';
import OuterCard from '../../core/components/atoms/OuterCard';
import NumberPicker from '../../core/components/molecules/NumberPicker';
import { useState } from 'react';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function MembersListSetupScreen({ navigation, route }: PlanixScreenProps<PlanixRoutes.MembersListSetupScreen>) {
  const [members, setMembers] = useState<number>(1);

  const handleMembersChange = (value: number) => {
    setMembers(value);
  }

  return (
    <Animated.View entering={FadeInDown}>
      <OuterCard>
        <NumberPicker value={members} onValueChange={handleMembersChange} />
      </OuterCard>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});