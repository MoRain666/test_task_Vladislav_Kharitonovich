import {StyleProp, ViewStyle, TextStyle} from 'react-native';

import {MOCKED_LIST_DATA} from './mockedData';

export type StylePropView = StyleProp<ViewStyle>;
export type StylePropText = StyleProp<TextStyle>;
export type DataListItem = typeof MOCKED_LIST_DATA[0];
export type GradientLocations = [number, number];

export interface ExpandingDotsSharedProps {
  itemWidth?: number;
  containerStyle?: StylePropView;
  dotStyle?: StylePropView;
  dotWidth?: number;
  inactiveDotOpacity?: number;
  inactiveDotColor?: string;
  expandingDotWidth?: number;
  activeOpacity?: number;
  activeDotColor?: string;
}
