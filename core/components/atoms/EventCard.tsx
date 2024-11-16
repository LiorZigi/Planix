import { StyleSheet, Pressable, Text } from 'react-native';
import BackgroundGradient from '../../../styles/GradientBackground';
import { globalStyles } from '../../../styles/constants';
import { Octicons } from '@expo/vector-icons';
import { PlanixNavigationProp, PlanixRoutes } from '../../@planix/types';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../../store/selectors/themeSelectors';

interface EventCardProps {
  style?: object | object[];
  navigation: PlanixNavigationProp;
  onPress?: () => void;
  eventName: PlanixRoutes;
  eventEmoji?: string;
  index?: number;
}

const EventCard = ({
  style,
  navigation,
  eventName,
  eventEmoji,
  index,
}: EventCardProps) => {
  const theme = useSelector(selectTheme);

  const handlePress = (route: any): void => {
    navigation.navigate(route, { eventType: eventName });
  };

  return (
    <Pressable
      onPress={handlePress.bind(null, eventName)}
      style={styles.cardShadow}
    >
      <BackgroundGradient
        topColor={theme.inputBackgroundColor}
        bottomColor={theme.inputBackgroundColor}
        style={[styles.card, style]}
      >
        {eventName === PlanixRoutes.Custom ? (
          <>
            <Octicons
              name="plus"
              size={50}
              color={theme.textColor}
            />
            <Text style={[styles.cardText, { color: theme.textColor }]}>{eventName}</Text>
          </>
        ) : (
          <>
            <Text style={styles.eventEmojis}>{eventEmoji}</Text>
            <Text style={[styles.cardText, { color: theme.textColor }]}>{eventName}</Text>
          </>
        )}

      </BackgroundGradient>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    padding: 16,
  },
  cardShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    // shadowOpacity: 0.2,
    // shadowRadius: 3,
    // elevation: 5,
  },
  cardText: {
    ...globalStyles.text,
    fontSize: 20,
    textAlign: 'center',
  },
  eventEmojis: {
    fontSize: 50,
  },
});

export default EventCard;
