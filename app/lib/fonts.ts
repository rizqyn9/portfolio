import type { LinkDescriptor } from "@remix-run/node"

export const linksFont: LinkDescriptor[] = [
  {
    // 'Panchang-Regular'
    rel: "preload",
    as: "font",
    href: "/fonts/Panchang-Regular.woff2",
    type: "font/woff2",
    crossOrigin: "anonymous",
  },
]
