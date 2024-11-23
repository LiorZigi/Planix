import React from 'react';
import { View } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';
import { IconProps } from './models/IconProps';
import { selectTheme } from '../../store/selectors/themeSelectors';
import { useSelector } from 'react-redux';

const Picnic = ({
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
          strokeWidth="1"
        >
          <Path d="M17.592 2H6.408A4.407 4.407 0 0 0 2 6.408v11.184A4.407 4.407 0 0 0 6.408 22h11.184A4.407 4.407 0 0 0 22 17.592V6.408A4.407 4.407 0 0 0 17.592 2M9.923 18.7c-.052.266.108.655-.179.817a6.4 6.4 0 0 1-.962.027c-.267-.03-.58.078-.809-.1c-.693-1.067-1.328-2.167-1.991-3.244c-.01.831-.015 1.663-.027 2.495c-.043.268.074.6-.137.814a9 9 0 0 1-1.055.043c-.275-.021-.618.072-.823-.165c0-1.992-.006-3.984.008-5.976c.063-.266-.13-.665.167-.823a6 6 0 0 1 1.037-.037c.252.027.565-.069.76.135c.654 1.128 1.324 2.247 1.969 3.381c.01-.894.013-1.787.028-2.681c.059-.257-.107-.633.158-.8a8 8 0 0 1 1.311-.037c.3-.085.641.137.533.471q.038 2.837.012 5.68m.2-11.094a2.64 2.64 0 0 1-.88 2.043a4.3 4.3 0 0 1-2.7.837c-.167.063-.54-.12-.569.107c-.085.267.1.645-.172.827a8 8 0 0 1-1.114.045c-.247-.024-.555.052-.74-.157c0-2-.008-4.009.008-6.014c.058-.257-.1-.628.158-.795c.613-.043 1.228-.041 1.843-.041a7 7 0 0 1 1.96.165a2.8 2.8 0 0 1 1.899 1.353a3.2 3.2 0 0 1 .302 1.624zm2.744 11.892l-.027.014l-.029.009a13 13 0 0 1-1.482.021c-.377.073-.377-.368-.37-.625a108 108 0 0 1 0-4.417c.013-.237-.06-.66.293-.652c.493.015.988-.022 1.481.014c.328.019.2.444.245.662c.03 1.4.013 2.792 0 4.187c-.046.255.073.564-.116.782zm-.985-8.513a.99.99 0 0 1 .948.474a1.02 1.02 0 0 1-.4 1.468a.9.9 0 0 1-.288.091a1.02 1.02 0 0 1-1.188-.935a1.01 1.01 0 0 1 .923-1.103zm1.1-1.659a2.1 2.1 0 0 1-.089.774l-.042.031a6 6 0 0 1-.893.034c-.254-.008-.508.008-.761 0s-.214-.31-.236-.492c-.03-1.511-.035-3.022 0-4.533c.027-.222-.069-.571.2-.668c.5 0 1-.018 1.5 0c.373-.056.309.385.323.622a157 157 0 0 1-.006 4.227Zm1.411-3.453a3.68 3.68 0 0 1 3.074-1.535a3.7 3.7 0 0 1 1.713.345c.251.16.647.221.731.547a3.8 3.8 0 0 1-.476.883c-.181.186-.28.569-.585.551a2.6 2.6 0 0 0-1.254-.365a1.7 1.7 0 0 0-1.58.937a1.72 1.72 0 0 0 .36 1.951a1.93 1.93 0 0 0 2.065.271c.246-.067.429-.311.7-.294a3.4 3.4 0 0 1 .6.778c.115.236.351.447.324.728a3.8 3.8 0 0 1-1.8.881a4.2 4.2 0 0 1-2.643-.388a3.36 3.36 0 0 1-1.752-2.381a3.93 3.93 0 0 1 .519-2.914Zm5.649 12.878a3.73 3.73 0 0 1-1.876.881q-.164.023-.33.029a3.9 3.9 0 0 1-2.7-.74a3.5 3.5 0 0 1-1.336-2.868a3.57 3.57 0 0 1 .962-2.577a4.035 4.035 0 0 1 4.506-.693c.226.138.515.224.652.467a4.6 4.6 0 0 1-.8 1.344c-.193.308-.5-.011-.736-.085a2.07 2.07 0 0 0-1.888.192a1.72 1.72 0 0 0-.264 2.406a1.87 1.87 0 0 0 2.061.465c.3-.057.521-.346.837-.347a3.3 3.3 0 0 1 .639.829c.083.226.375.436.269.692zM7.705 6.635a3.07 3.07 0 0 0-1.723-.277q.002.448-.007.906A11 11 0 0 0 6 8.533l.033.007A4.5 4.5 0 0 0 7.3 8.453a.98.98 0 0 0 .778-.937a.99.99 0 0 0-.373-.881" />
        </G>
      </Svg>
    </View>
  );
};

export default Picnic;