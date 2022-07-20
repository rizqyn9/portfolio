import { Links, Meta, Scripts, LiveReload } from "@remix-run/react"
import React from "react"
import { Layout } from "./Layout"

type DocumentProps = {
  children: React.ReactNode
}

export default function Document(props: DocumentProps) {
  const { children } = props
  return (
    <html lang="en" className="rdev-dark">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Layout header headerProps={{ offsetHeight: 256 }}>
          {children}
        </Layout>
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
