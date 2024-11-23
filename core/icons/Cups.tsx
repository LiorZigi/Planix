import { View } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';
import { IconProps } from './models/IconProps';
import { selectTheme } from '../../store/selectors/themeSelectors';
import { useSelector } from 'react-redux';

const Cups = ({
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
          strokeWidth="1.5"
        >
          <Path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
          <Path fill={fill} d="M17.883 2a2 2 0 0 1 1.987 2.22l-1.777 16A2 2 0 0 1 16.105 22h-8.21a2 2 0 0 1-1.988-1.78l-1.778-16A2 2 0 0 1 6.117 2zm0 2H6.117l.425 3.823a8 8 0 0 1 1.087-.134c1.199-.07 2.856.074 4.765.892c1.591.682 2.934.788 3.86.733a6 6 0 0 0 1.055-.15zm-.805 7.24q-.319.047-.707.07c-1.199.071-2.856-.073-4.765-.89c-1.591-.683-2.934-.789-3.86-.734a6 6 0 0 0-.982.134L7.895 20h8.21zM11 13a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2" />
        </G>
      </Svg>
    </View>
  );
};

export default Cups;
