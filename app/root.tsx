import type { LinksFunction, MetaFunction } from "@remix-run/node"
import {
  Outlet,
  ScrollRestoration,
  Meta,
  Links,
  Scripts,
  LiveReload,
} from "@remix-run/react"
import globalCSS from "~/styles/global.css"
import normalizeCSS from "~/styles/normalize.css"
import { globalStyles } from "./lib/globalStyles"
import { NotFound } from "./components/Layout/404"
import { Header } from "./components/Header"
import { Layout } from "./components/Layout"

export const links: LinksFunction = () => [
  { href: normalizeCSS, rel: "stylesheet" },
  { href: globalCSS, rel: "stylesheet" },
  { href: globalStyles(), rel: "stylesheet" },
]

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Rizqy Prastya Ari Nugroho",
  viewport: "width=device-width,initial-scale=1",
})

export default function App() {
  return (
    <Document>
      <Outlet />
      <ScrollRestoration />
    </Document>
  )
}

export function CatchBoundary() {
  return (
    <Document>
      <NotFound />
    </Document>
  )
}

function Document({
  children,
  title,
}: {
  children: React.ReactNode
  title?: string
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body className="rdev-dark">
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  )
}
