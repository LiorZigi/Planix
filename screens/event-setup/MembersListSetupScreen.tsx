import { StyleSheet } from 'react-native';
import { PlanixRoutes, PlanixScreenProps } from '../../core/@planix/types';
import OuterCard from '../../core/components/atoms/OuterCard';
import NumberPicker from '../../core/components/molecules/NumberPicker';
import { useState } from 'react';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { selectTheme } from '../../store/selectors/themeSelectors';
import { useSelector } from 'react-redux';
import { globalStyles } from '../../styles/constants';

export default function MembersListSetupScreen({ navigation, route }: PlanixScreenProps<PlanixRoutes.MembersListSetupScreen>) {
  const theme = useSelector(selectTheme);
  const [members, setMembers] = useState<number>(1);

  return (
    <Animated.View style={[styles.container, { backgroundColor: theme.bottomBackgroundColor }]} entering={FadeInDown}>
      <OuterCard style={[styles.outerCard, { backgroundColor: theme.cardTopColor }]}>
        <NumberPicker value={members} onValueChange={(value) => setMembers(value)} />
      </OuterCard>

    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...globalStyles.container,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outerCard: {
    padding: 16,
    justifyContent: 'center',
  },
});
