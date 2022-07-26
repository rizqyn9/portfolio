import type { LinksFunction, MetaFunction } from "@remix-run/node"
import { Outlet, ScrollRestoration, Meta, Links, Scripts, LiveReload } from "@remix-run/react"
import globalCSS from "~/styles/global.css"
import normalizeCSS from "~/styles/normalize.css"
import { globalStyles } from "./lib/globalStyles"
import { NotFound } from "./components/Layout/404"
import { Cursor } from "~/components/Cursor"
import { linksFont } from "./lib/fonts"
import { useCursorStore } from "~/components/Cursor"
import { motion } from "framer-motion"

export const links: LinksFunction = () => [
  { href: normalizeCSS, rel: "stylesheet" },
  { href: globalCSS, rel: "stylesheet" },
  { href: globalStyles(), rel: "stylesheet" },
  ...linksFont,
]

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Rizqy Prastya Ari Nugroho",
  viewport: "width=device-width,user-scalable=no",
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

function Document({ children, title }: { children: React.ReactNode; title?: string }) {
  const { update } = useCursorStore()

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <motion.body
        className="rdev-dark"
        // initial={{ background: "#fff" }}
        // animate={{ background: "#000000" }}
        // transition={{ duration: 1 }}
        style={{ fontFamily: "Arial", fontSize: "1.2vw", fontWeight: "bold", display: "flex", flexDirection: "column" }}
        onMouseEnter={() => update("basic")}
      >
        <Cursor />
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </motion.body>
    </html>
  )
}
