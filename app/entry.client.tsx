import { RemixBrowser, type RemixBrowserProps } from "@remix-run/react"
import { hydrate } from "react-dom"
import { globalStyles } from "./lib/globalStyles"

function EntryClient(props: RemixBrowserProps) {
  globalStyles()
  return <RemixBrowser {...props} />
}
hydrate(<EntryClient />, document)
