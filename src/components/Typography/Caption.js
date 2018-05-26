/* @flow strict */

import * as React from 'react';
import { StyleSheet } from 'react-native';
import StyledText from './StyledText';
import type { TextStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet';

type Props = {
  style?: TextStyleProp,
};

/**
 * Typography component for showing a caption.
 *
 * <div class="screenshots">
 *   <img src="screenshots/caption.png" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Caption } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Caption>Caption</Caption>
 * );
 * ```
 */
const Caption = (props: Props) => (
  <StyledText
    {...props}
    alpha={0.54}
    family="regular"
    style={[styles.text, props.style]}
  />
);

export default Caption;

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    lineHeight: 20,
    marginVertical: 2,
  },
});
