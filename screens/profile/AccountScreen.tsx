import { View, Text, StyleSheet } from 'react-native';
import { useDynamicColors } from '../../styles/useDynamicColors';
import { PlanixRoutes, PlanixScreenProps } from '../../core/@planix/types';

export default function AccountScreen({ navigation }: PlanixScreenProps<PlanixRoutes.Account>) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Account Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: useDynamicColors().topBackgroundColor,
    },
    text: {
        color: useDynamicColors().textColor,
    }

});
