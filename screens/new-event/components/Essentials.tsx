import { View, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../../../styles/constants';
import { useDynamicColors } from '../../../styles/useDynamicColors';

export default function Essentials() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Essentials</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        ...globalStyles.container,
        backgroundColor: useDynamicColors().inputBackgroundColor,
        justifyContent: 'space-between',
    },
    text: {
        fontSize: 14,
        color: useDynamicColors().textColor,
    }
});
