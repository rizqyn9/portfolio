import type { EntryContext } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { renderToString } from "react-dom/server";
import { getCssText } from "~/stitches.config";

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  let markup = renderToString(
    <RemixServer context={remixContext} url={request.url} />
  ).replace(/<\/head>/, `<style id="stitches">${getCssText()}</style></head>`);

  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: {
      ...Object.entries(responseHeaders),
      "Content-Type": "text/html",
    },
  });
}
