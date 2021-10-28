import {StyleSheet} from 'react-native';

import {WHITE} from '@utils/colors';
import {EUCLID_CIRCULAR_A_BOLD} from '@utils/fonts';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: WHITE,
    textAlignVertical: 'center',
    fontFamily: EUCLID_CIRCULAR_A_BOLD,
  },
});
