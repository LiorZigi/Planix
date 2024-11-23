import { View } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';
import { IconProps } from './models/IconProps';
import { selectTheme } from '../../store/selectors/themeSelectors';
import { useSelector } from 'react-redux';

const Bread = ({
  size = 24,
  hasFill = false,
  fill,
  color
}: IconProps) => {
  const theme = useSelector(selectTheme);
  return (
    <View>
      <Svg width={size} height={size} viewBox="0 0 24 24">
        <G
          fill={hasFill ? fill : 'none'}
          stroke={color || theme.textColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <Path d="M5 22c-1.32 0-1.85-2.36-1.96-3.3a5.56 5.56 0 0 1 .32-2.7a2.5 2.5 0 0 1 1.87-1.62c1.17-.2 2 .5 3.06.74a1.21 1.21 0 0 0 1.56-1.37C9.41 12.03 6.28 12 5 12c0-1.86 2.04-2.1 3.5-1.96a10.8 10.8 0 0 1 2.54.56c.5.17 1.08.6 1.63.56c.83-.07 1-.93.64-1.56C12.44 8.12 9.97 8 8.5 8c0-2 1.73-2.38 3.39-2.08a11.6 11.6 0 0 1 2.49.79c.51.22 1.12.64 1.68.45c1.44-.44-.06-1.98-.7-2.35a6.6 6.6 0 0 0-1.42-.58c-.54-.16-1.2-.1-.71-.73a5.13 5.13 0 0 1 2.73-1.24c1.89-.44 4.5-.52 4.96 1.86a5.3 5.3 0 0 1-.85 3.58a39 39 0 0 1-6.85 8.63a36.6 36.6 0 0 1-4.6 3.99C7.62 21.04 6.3 22 5 22" />
        </G>
      </Svg>
    </View>
  );
};

export default Bread;