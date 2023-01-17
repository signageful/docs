import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { Logo } from './components/Logo'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  logo: <Logo />,
  docsRepositoryBase: 'https://github.com/signageful/docs',
  useNextSeoProps() {
    const { route } = useRouter()
    if (route !== '/') {
      return {
        titleTemplate: '%s – Signageful Docs',
      }
    }
  },
  editLink: {
    text: 'Bearbeite diese Seite auf GitHub →'
  },
  feedback: {
    content: 'Fragen? Gib uns feedback →',
    labels: 'feedback'
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1
  },
  footer: {
    text: (
        <p>
            &copy; {new Date().getFullYear()} teamspiel GmbH.
        </p>
    )
  },
}

export default config
