'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  React.useEffect(() => {
    // Ensure the toast container is always visible regardless of theme
    const toastContainer = document.querySelector('.radix-toast-viewport') as HTMLElement | null
    if (toastContainer) {
      toastContainer.style.zIndex = '9999'
    }
  }, [])
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
