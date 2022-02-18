import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme extends UiTheme {
    backgroundColor: string,
    foregroundColor: string,
    boxShadow: string,
    titleColor: string,
    temperatureColor: string,
    textColor: string,
    font: {
      color: string,
    }
  }
}