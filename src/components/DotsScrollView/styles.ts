import {StyleSheet, Dimensions} from 'react-native';

import {EUCLID_CIRCULAR_A_BOLD} from '@utils/fonts';
import {WHITE} from '@utils/colors';

import {EDGE} from './constants';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
  },
  fadingEdgeStyle: {
    width,
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 14,
    fontFamily: EUCLID_CIRCULAR_A_BOLD,
    color: WHITE,
    textTransform: 'capitalize',
    textAlign: 'center',
  },
  listContentContainer: {
    paddingHorizontal: EDGE,
  },
  dotContainer: {
    marginTop: 15,
  },
});
