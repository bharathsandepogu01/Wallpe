export interface IColorsConfig {
  primary: string;
  primaryDark: string;
  background: string;
  textPrimary: string;
  textSecondary: string;
  textTertiary: string;
  borderColor: string;
}

export interface ITypographyConfig {
  fontFamily: string;
  fontSize: number;
  fontSizeLarge: number;
  fontSizeMedium: number;
  fontSizeSmall: number;
  lineHeight: number;
}

export interface IStylesConfig extends IColorsConfig, IStylesConfig {}
