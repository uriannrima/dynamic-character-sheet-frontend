import VueTypes from 'vue-types';

export interface ITheme {
  main: string;
  primary: string;
  secondary: string;
  failure: string;
  disabled: string;
  attention: string;
}

export const ThemeProps = {
  main: VueTypes.string,
  primary: VueTypes.string,
  secondary: VueTypes.string,
  failure: VueTypes.string,
  disabled: VueTypes.string,
  attention: VueTypes.string
};

export const DefaultTheme: ITheme = {
  main: '#000000',
  primary: '#008000',
  secondary: '#838383',
  failure: '#C53131',
  disabled: '#838383',
  attention: '#f1f199'
};

export const Theme = VueTypes.shape(ThemeProps).def(() => DefaultTheme);

export const getTheme = function (props: any): ITheme {
  return props.theme ? props.theme : DefaultTheme;
};

export default Theme;
