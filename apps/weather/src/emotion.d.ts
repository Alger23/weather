import '@emotion/react'

import {defaultTheme} from '@seektop/ui'

declare module '@emotion/react' {
  export interface Theme extends defaultTheme {}
}
