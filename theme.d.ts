import { theme } from "./assets/global-styles/theme"
// styled.d.ts
import 'styled-components';

export type ThemeType = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {
  }
}