import { View } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';
import { IconProps } from './models/IconProps';
import { selectTheme } from '../../store/selectors/themeSelectors';
import { useSelector } from 'react-redux';

const Peppers = ({
  size = 24,
  hasFill = false,
  fill,
  color
}: IconProps) => {
  const theme = useSelector(selectTheme);
  return (
    <View>
      <Svg width={size} height={size} viewBox="0 0 36 36">
        <G
          fill={hasFill ? fill : 'none'}
          stroke={color || theme.textColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        >
          <Path d="M12.274 7.304q-.395.17-.737.422A3.1 3.1 0 0 0 9.534 7h-2.78a3.75 3.75 0 0 0-3.74 4.07l1.32 15.12c.19 2.15 2 3.81 4.16 3.81a4.16 4.16 0 0 0 3.344-1.685A5.98 5.98 0 0 0 16.004 30a5.98 5.98 0 0 0 4.167-1.685A4.16 4.16 0 0 0 23.514 30c2.16 0 3.97-1.66 4.16-3.81l1.31-15.11A3.74 3.74 0 0 0 25.254 7h-2.78c-.764 0-1.461.273-2.002.726a3.8 3.8 0 0 0-.738-.422a4.18 4.18 0 0 0-2.58-2.143q.045-.102.1-.201c.35-.6 1-.96 1.7-.96h.05c.55 0 1-.45 1-1s-.45-1-1-1h-.04c-1.4 0-2.73.73-3.42 1.95a4 4 0 0 0-.446 1.149a4.18 4.18 0 0 0-2.824 2.205M9.534 9c.295 0 .563.113.762.298a3.7 3.7 0 0 0-.292 1.452V24c0 .893.196 1.74.547 2.502A2.16 2.16 0 0 1 8.494 28a2.184 2.184 0 0 1-2.167-1.985l-1.32-15.118A1.75 1.75 0 0 1 6.754 9zm12.47 15V10.75a3.7 3.7 0 0 0-.292-1.452c.2-.185.467-.298.762-.298h2.78a1.74 1.74 0 0 1 1.738 1.899l-1.31 15.115v.001A2.184 2.184 0 0 1 23.514 28c-.96 0-1.776-.628-2.056-1.498A6 6 0 0 0 22.004 24m-10 0V10.75c0-.965.785-1.75 1.75-1.75h4.5c.966 0 1.75.785 1.75 1.75V24c0 2.205-1.794 4-4 4s-4-1.795-4-4" />
        </G>
      </Svg>
    </View>
  );
};

export default Peppers;