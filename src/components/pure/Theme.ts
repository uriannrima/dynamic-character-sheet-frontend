import VueTypes from 'vue-types';

export interface ITheme {
  primary: string;
  secondary: string;
  success: string;
  failure: string;
  disabled: string;
  attention: string;
}

export const ThemeProps = {
  primary: VueTypes.string,
  secondary: VueTypes.string,
  success: VueTypes.string,
  failure: VueTypes.string,
  disabled: VueTypes.string,
  attention: VueTypes.string
};

export const DefaultTheme = {
  primary: '#000000',
  secondary: '#838383',
  success: '#008000',
  failure: '#C53131',
  disabled: '#838383',
  attention: '#f1f199'
};

export const Theme = VueTypes.shape(ThemeProps).def(() => DefaultTheme);

export default Theme;
