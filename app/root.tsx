import type { LinksFunction, MetaFunction } from "@remix-run/node"
import { Outlet, ScrollRestoration } from "@remix-run/react"
// import normalizeCSS from "~/styles/normalize.css"
import globalCSS from "~/styles/global.css"
import { globalStyles } from "./lib/globalStyles"
import Document from "~/components/Layout/Document"

export const links: LinksFunction = () => [
  // { href: normalizeCSS, rel: "stylesheet" },
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
  return <Document></Document>
}
