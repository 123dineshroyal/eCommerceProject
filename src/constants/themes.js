import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const COLORS = {
  primary: 'rgb(0,75,254)',
  onPrimary: 'rgb(255, 255, 255)',
  primaryContainer: 'rgb(229, 235, 252)',
  onPrimaryContainer: 'rgb(0, 13, 95)',
  secondary: 'rgb(248, 248, 248)',
  onSecondary: 'rgb(255, 255, 255)',
  secondaryContainer: 'rgb(224, 225, 249)',
  onSecondaryContainer: 'rgb(24, 26, 44)',
  tertiary: 'rgb(255, 87, 144)',
  onTertiary: 'rgb(255, 255, 255)',
  tertiaryContainer: 'rgb(241, 174, 174)',
  onTertiaryContainer: 'rgb(45, 18, 39)',
  error: 'rgb(236,78,78)',
  onError: 'rgb(255, 255, 255)',
  errorContainer: 'rgb(255, 235, 235)',
  onErrorContainer: 'rgb(65, 0, 2)',
  background: 'rgb(255, 251, 255)',
  onBackground: 'rgb(27, 27, 31)',
  surface: 'rgb(221, 221, 221)',
  onSurface: 'rgb(27, 27, 31)',
  surfaceVariant: 'rgb(210, 210, 210)',
  onSurfaceVariant: 'rgb(70, 70, 79)',
  outline: 'rgb(8, 197, 20)',
  outlineVariant: 'rgb(199, 197, 208)',
  shadow: 'rgb(0, 0, 0)',
  scrim: 'rgb(0, 0, 0)',
  inverseSurface: 'rgb(48, 48, 52)',
  inverseOnSurface: 'rgb(243, 243, 243)',
  inversePrimary: 'rgb(187, 195, 255)',
  elevation: {
    level0: 'transparent',
    level1: 'rgb(246, 243, 251)',
    level2: 'rgb(240, 238, 249)',
    level3: 'rgb(235, 233, 247)',
    level4: 'rgb(233, 231, 246)',
    level5: 'rgb(229, 228, 245)',
  },
  surfaceDisabled: 'rgba(27, 27, 31, 0.12)',
  onSurfaceDisabled: 'rgba(27, 27, 31, 0.38)',
  backdrop: 'rgba(0, 0, 0, 0.8)',
};

export const SIZES = {
  //app Dimension
  width,
  height,
};

const appTheme = { COLORS, SIZES };

export default appTheme;
