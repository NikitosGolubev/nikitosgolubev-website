import { ref } from 'vue'
import { AppThemeEnum } from './types'
import { DEFAULT_APP_THEME } from '~/config/general'

export const APP_THEME = ref(DEFAULT_APP_THEME)

export function setAppTheme(theme: AppThemeEnum): void {
  APP_THEME.value = theme
}
