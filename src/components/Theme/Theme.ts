import VueTypes from 'vue-types';

export interface IHeaderTheme {
  main: string;
  secondary: string;
}

export interface ITextTheme {
  main: string;
  secondary: string;
  primary: string;
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
    main: VueTypes.string,
    secondary: VueTypes.string,
    primary: VueTypes.string,
    failure: VueTypes.string,
    disabled: VueTypes.string,
    attention: VueTypes.string
  }),
  header: VueTypes.shape({
    main: VueTypes.string,
    secondary: VueTypes.string
  })
};

export const DefaultTheme: ITheme = {
  text: {
    main: '#000000',
    secondary: '#838383',
    primary: '#008000',
    failure: '#C53131',
    disabled: '#838383',
    attention: '#f1f199'
  },
  header: {
    main: '#FFFFFF',
    secondary: '#838383'
  }
};

export const Theme = VueTypes.shape(ThemeProps).def(() => DefaultTheme);

export const getTheme = function (props: any): ITheme {
  return props.theme ? props.theme : DefaultTheme;
};

export default Theme;
