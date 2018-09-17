import VueTypes from 'vue-types';

export interface IHeaderTheme {
  primary: string;
  secondary: string;
}

export interface ITextTheme {
  primary: string;
  secondary: string;
  success: string;
  failure: string;
  disabled: string;
  attention: string;
}

export interface ITheme {
  text: ITextTheme;
  header: IHeaderTheme;
}

export const ThemeProps = {
  text: VueTypes.shape({
    primary: VueTypes.string,
    secondary: VueTypes.string,
    success: VueTypes.string,
    failure: VueTypes.string,
    disabled: VueTypes.string,
    attention: VueTypes.string
  }),
  header: VueTypes.shape({
    primary: VueTypes.string,
    secondary: VueTypes.string
  })
};

export const DefaultTheme: ITheme = {
  text: {
    primary: '#000000',
    secondary: '#838383',
    success: '#008000',
    failure: '#C53131',
    disabled: '#838383',
    attention: '#f1f199'
  },
  header: {
    primary: '#FFFFFF',
    secondary: '#838383'
  }
};

export const Theme = VueTypes.shape(ThemeProps).def(() => DefaultTheme);

export const getTheme = function (props: any): ITheme {
  return props.theme ? props.theme : DefaultTheme;
};

export default Theme;
