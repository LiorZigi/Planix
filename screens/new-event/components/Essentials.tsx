import { View, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../../../styles/constants';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../../store/selectors/themeSelectors';

export default function Essentials() {
    const theme = useSelector(selectTheme);
    return (
        <View style={[styles.container, { backgroundColor: theme.inputBackgroundColor }]}>
            <Text style={[styles.text, { color: theme.textColor }]}>Essentials</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        ...globalStyles.container,
        justifyContent: 'space-between',
    },
    text: {
        fontSize: 14,
    }
});
