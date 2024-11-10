import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { colors, globalStyles } from '../../../styles/constants';
import Input from '../../../core/components/atoms/Input';
import { useState } from 'react';
import Checkbox from '../../../core/components/atoms/CheckBox';
import NumberPicker from '../../../core/components/molecules/NumberPicker';
import ExpansionPanel from '../atoms/ExpansionPanel';
import PlxButton from '../atoms/PlxButton';
import { useDynamicColors } from '../../../styles/useDynamicColors';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions,
} from '@react-navigation/material-top-tabs';
import EssentialsList from '../molecules/EssentialsList';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { EventData } from '../../../models/EventData';
interface NewEventModalProps {
  event: string;
  data: EventData | undefined;
}

const Tab = createMaterialTopTabNavigator();

const NewEventModal = ({ event, data }: NewEventModalProps) => {
  const dynamicColors = useDynamicColors();
  const navigation = useNavigation<any>();
  const offset = useSharedValue<number>(0);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [groupName, setGroupName] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [checked, setChecked] = useState<boolean>(false);
  const [members, setMembers] = useState<number>(2);
  const isDisabled = groupName.trim() === '';
  const screenOptions: MaterialTopTabNavigationOptions = {
    tabBarLabelStyle: { fontSize: 15, textTransform: 'capitalize' },
    tabBarStyle: { backgroundColor: dynamicColors.inputBackgroundColor },
    tabBarIndicatorStyle: { backgroundColor: dynamicColors.textColor },
    tabBarActiveTintColor: dynamicColors.textColor,
  };
  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: offset.value }],
  }));

  const handleCheckboxPress = (): void => {
    setChecked(!checked);
  };

  const handleGroupNameChanged = (text: string): void => {
    setGroupName(text);
  };

  const handleLocationChanged = (text: string): void => {
    setLocation(text);
  }

  const handleDateChanged = (text: string): void => {
    setDate(text);
  }

  const handleNumberPickerChange = (value: number): void => {
    setMembers(value);
  };

  const handlePanelPress = (): void => {
    setIsExpanded(!isExpanded);
    offset.value = withSpring(offset.value === 0 ? -300 : 0, {
      damping: 20,
      stiffness: 100,
    });
  };

  const handleCreateGroup = (): void => {
    navigation.goBack();
    navigation.navigate('PlanixStack', {
      event: event,
      groupName: groupName,
      members: members,
      notifyMembers: checked,
    });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 120 : 0}
    >
      <Animated.View>
        <View style={styles.groupNameContainer}>
          <Text style={{ ...globalStyles.text, alignSelf: 'center' }}>
            Group Name
          </Text>
          <Input
            value={groupName}
            textAlign="center"
            onChangeText={handleGroupNameChanged}
          />
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.locationContainer}>
            <Text style={{ ...globalStyles.text, alignSelf: 'center' }}>Location</Text>
            <Input value={location} textAlign="center" onChangeText={handleLocationChanged} />
          </View>
          <View style={styles.dateContainer}>
            <Text style={{ ...globalStyles.text, alignSelf: 'center' }}>Date</Text>
            <Input value={date} textAlign="center" onChangeText={handleDateChanged} />
          </View>
        </View>
        <View style={styles.membersContainer}>
          <View style={styles.inputContainer}>
            <Text style={globalStyles.text}>Number of members</Text>
            <NumberPicker
              style={{ justifyContent: 'center' }}
              value={members}
              onValueChange={handleNumberPickerChange}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={globalStyles.text}>Notify members</Text>
            <Checkbox
              style={{ alignSelf: 'center' }}
              checked={checked}
              onPress={handleCheckboxPress}
            />
          </View>
        </View>
        <Animated.View style={[styles.panelContainer, animatedStyles]}>
          <ExpansionPanel title="Essentials" onPress={handlePanelPress}>
            <Tab.Navigator
              style={{ marginTop: 5 }}
              screenOptions={screenOptions}
            >
              <Tab.Screen name="Disposables">
                {() => <EssentialsList data={data?.disposables} />}
              </Tab.Screen>
              <Tab.Screen name="Food">
                {() => <EssentialsList data={data?.food} />}
              </Tab.Screen>
              <Tab.Screen name="Drinks">
                {() => <EssentialsList data={data?.drinks} />}
              </Tab.Screen>
              <Tab.Screen name="Others">
                {() => <EssentialsList data={data?.others} />}
              </Tab.Screen>
            </Tab.Navigator>
          </ExpansionPanel>
        </Animated.View>
      </Animated.View>

      <View style={styles.createButton}>
        <PlxButton
          title="Create Group"
          disabled={isDisabled}
          onPress={handleCreateGroup}
          style={styles.button}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default NewEventModal;

const styles = StyleSheet.create({
  container: {
    ...globalStyles.container,
    backgroundColor: useDynamicColors().bottomBackgroundColor,
    justifyContent: 'space-between',
  },
  groupNameContainer: {
    paddingHorizontal: 16,
    gap: 10,
  },
  detailsContainer: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
  },
  locationContainer: {
    gap: 10,
    width: '45%',
  },
  dateContainer: {
    gap: 10,
    width: '45%',
  },
  membersContainer: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputContainer: {
    gap: 12,
  },
  panelContainer: {
    // paddingHorizontal: 16,
    zIndex: 1,
    width: '100%',
  },
  tabsContainer: {
    color: useDynamicColors().textColor,
    backgroundColor: colors.inputBackgroundColor,
  },
  createButton: {
    flex: 1,
    marginBottom: 30,
    justifyContent: 'flex-end',
  },
  button: {
    width: '100%',
    alignItems: 'center',
    alignSelf: 'center',
  }
});
