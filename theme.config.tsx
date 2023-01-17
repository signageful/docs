import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
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
  head: function useHead() {
    const { title } = useConfig()
    const { route } = useRouter()

    return (
        <>
            <meta name="msapplication-TileColor" content="#fff" />
            <meta name="theme-color" content="#fff" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta httpEquiv="Content-Language" content="de" />
            <meta
                name="description"
                content="Signageful Dokumentation"
            />
            <meta
                name="og:description"
                content="Signageful Dokumentation"
            />
            <meta
                name="og:title"
                content={title ? title + ' – Signageful' : 'Signageful'}
            />
            <meta name="apple-mobile-web-app-title" content="Signageful" />
        </>
    )
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
