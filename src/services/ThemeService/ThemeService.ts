import { useDark, useToggle } from '@vueuse/core'

export const ThemeService = Object.freeze({
  isDark: useDark(),
  toggleDark: useToggle(useDark()),
})
