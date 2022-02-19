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
    },
    button:{
      hover:{
        borderColor: string
      }
    },
    img:{
      hover:{
        borderColor: string
      }
    },
    alert:{
      error: string,
      warning: string,
      info: string,
      success: string
    }
  }
}
