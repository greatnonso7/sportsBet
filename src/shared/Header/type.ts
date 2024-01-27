import {BoxProps} from 'design-system';
import {ViewStyle} from 'react-native';

export interface headerProps {
  hasBackButton?: boolean;
  hasRightIcon?: React.ReactElement;
  onPressRightIcon?: () => void;
  onPressLeftIcon?: () => void;
  containerProps?: BoxProps;
  hasHeaderText?: string;
  hasSubHeaderText?: string;
  width?: number;
  headerTitle?: string;
  textVariant?: 'bodySmall' | 'smallBold';
  title?: string;
  headerTitleStyle?: ViewStyle;
}
