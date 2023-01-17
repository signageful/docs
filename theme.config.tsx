import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { Logo } from './components/Logo'

const config: DocsThemeConfig = {
  logo: <Logo />,
  docsRepositoryBase: 'https://github.com/signageful/docs',
  footer: {
    text: '© teamspiel GmbH',
  },
}

export default config
