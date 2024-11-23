import { StyleSheet, Text, View } from 'react-native';
import { PlanixRoutes, PlanixScreenProps } from '../../core/@planix/types';
import OuterCard from '../../core/components/atoms/OuterCard';
import NumberPicker from '../../core/components/molecules/NumberPicker';
import { useState } from 'react';
import Animated, { FadeInDown, FadeInLeft } from 'react-native-reanimated';
import { selectTheme } from '../../store/selectors/themeSelectors';
import { useSelector } from 'react-redux';
import { globalStyles } from '../../styles/constants';
import PlxButton from '../../core/components/atoms/PlxButton';

export default function MembersListSetupScreen({ navigation, route }: PlanixScreenProps<PlanixRoutes.MembersListSetupScreen>) {
  const theme = useSelector(selectTheme);
  const [members, setMembers] = useState<number>(1);

  return (
    <Animated.View style={[styles.container, { backgroundColor: theme.bottomBackgroundColor }]} entering={FadeInDown}>
      <Animated.View style={styles.titleContainer} entering={FadeInLeft.duration(600).delay(300)}>
        <Text style={[styles.title, { color: theme.textColor }]}>
          How many members?
        </Text>
      </Animated.View>
      <View style={styles.contentContainer}>
        <Animated.View style={styles.outerCardContainer} entering={FadeInDown.duration(600).delay(500)}>
          <OuterCard style={[styles.outerCard, { backgroundColor: theme.outerCardColor }]}>
            <NumberPicker value={members} onValueChange={(value) => setMembers(value)} />
          </OuterCard>
        </Animated.View>
        <Animated.View style={styles.buttonContainer} entering={FadeInLeft.duration(900).delay(1000)}>
          <PlxButton title='Next' onPress={() => navigation.navigate(PlanixRoutes.ProductsListSetupScreen)} style={styles.button} />
        </Animated.View>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...globalStyles.container,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleContainer: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    lineHeight: 50,

  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'space-around',
    width: '100%',
  },
  outerCard: {
    padding: 16,
    alignItems: 'center',
    alignSelf: 'center',
  },
  outerCardContainer: {
  },
  buttonContainer: {

  },
  button: {

  },
});
