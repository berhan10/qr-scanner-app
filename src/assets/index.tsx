import React from 'react';
import {SvgProps} from 'react-native-svg';

import Scan from './Scan.svg';

interface IconProps extends SvgProps {
  size?: number;
}

const Icon = {
  Scan: (props: IconProps) => createIcon(props, Scan),
};

const createIcon: React.FC = (props: IconProps, Svg: React.FC<SvgProps>) => {
  return (
    <Svg
      width={props.size ? props.size : 25}
      height={props.size ? props.size : 25}
      color={props.color ? props.color : '#000'}
      {...props}
    />
  );
};

export default Icon;
