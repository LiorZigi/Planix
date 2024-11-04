import { Provider } from 'react-redux';
import { Appearance } from 'react-native';
import { store } from './store/store';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useDynamicColors } from './styles/useDynamicColors';
import { useEffect } from 'react';
import Router from './core/navigation/Router';

export default function App() {
  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      useDynamicColors(colorScheme);
    });
    return () => subscription.remove();
  }, []);

  return (
    <Provider store={store}>
      <GestureHandlerRootView
        style={{
          flex: 1,
          backgroundColor: useDynamicColors().bottomBackgroundColor,
        }}
      >
        <Router />
      </GestureHandlerRootView>
    </Provider>
  );
}
